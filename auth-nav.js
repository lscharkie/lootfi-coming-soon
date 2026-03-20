// Shared auth-aware nav updater
// Loaded after Supabase SDK on all pages
(function() {
    const SUPABASE_URL = 'https://sxpzgnbxvbmpxhavzsar.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_83VJEzvMOCQB-s55rXy1cw_UDVFb342';
    const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    sb.auth.getSession().then(function(result) {
        var session = result.data.session;
        if (session) {
            // User is logged in — swap nav buttons
            var authEl = document.querySelector('.topnav-auth');
            if (authEl) {
                authEl.innerHTML = '<a href="account.html" class="btn-login" style="text-decoration:none;">Account</a>';
            }
        }
    });
})();
