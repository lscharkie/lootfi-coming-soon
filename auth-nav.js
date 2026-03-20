// Shared auth-aware nav updater
// Hide auth buttons until session check completes to prevent flash
(function() {
    var authEl = document.querySelector('.topnav-auth');
    if (authEl) authEl.style.opacity = '0';

    var SUPABASE_URL = 'https://sxpzgnbxvbmpxhavzsar.supabase.co';
    var SUPABASE_KEY = 'sb_publishable_83VJEzvMOCQB-s55rXy1cw_UDVFb342';
    var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    sb.auth.getSession().then(function(result) {
        var session = result.data.session;
        if (session) {
            authEl.innerHTML = '<a href="account.html" class="btn-login" style="text-decoration:none;">Account</a>';
        }
        if (authEl) authEl.style.opacity = '1';
    }).catch(function() {
        if (authEl) authEl.style.opacity = '1';
    });
})();
