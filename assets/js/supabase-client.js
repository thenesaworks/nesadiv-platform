/* ==========================================================================
   NESADIV — SUPABASE CLIENT, SESSION GUARD & GLOBAL LOGOUT
   ========================================================================== */

const ND_SUPABASE_URL = 'https://olyzmkbhbxfydenosjjn.supabase.co';
const ND_SUPABASE_KEY = 'sb_publishable_4oHv_WTEx2_1doyXfyVEGg_oJ5ZMppd';

// Initialize Supabase client (requires @supabase/supabase-js@2 CDN in <head>)
window.ndSupabase = window.supabase
  ? window.supabase.createClient(ND_SUPABASE_URL, ND_SUPABASE_KEY)
  : null;

/**
 * Global Logout Handler
 * Signs out of Supabase, clears local state, and redirects cleanly.
 * @param {string} redirectTo - Target login page
 */
window.ndLogout = async function (redirectTo = '/dashboard/login.html') {
  try {
    if (window.ndSupabase) {
      await window.ndSupabase.auth.signOut();
    }
  } catch (err) {
    console.error('Logout error:', err);
  } finally {
    localStorage.removeItem('nd_user_role');
    window.location.href = redirectTo;
  }
};

/**
 * Session Guard for Protected Pages (Professionals Dashboard & Employer Suite)
 * @param {string} requiredType - 'professional' or 'employer'
 * @returns {Promise<{session: object, profile: object}|null>}
 */
window.ndRequireAuth = async function (requiredType = 'professional') {
  const loginUrl =
    requiredType === 'employer'
      ? '/employer-app/login.html'
      : '/dashboard/login.html';

  if (!window.ndSupabase) {
    window.location.href = loginUrl;
    return null;
  }

  const {
    data: { session },
    error,
  } = await window.ndSupabase.auth.getSession();

  if (error || !session) {
    window.location.href = loginUrl;
    return null;
  }

  // Fetch user profile to verify account_type
  const { data: profile } = await window.ndSupabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (profile && profile.account_type !== requiredType) {
    window.location.href =
      profile.account_type === 'employer'
        ? '/employer-app/index.html'
        : '/dashboard/index.html';
    return null;
  }

  return { session, profile };
};
