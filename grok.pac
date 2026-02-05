function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.x.ai") || shExpMatch(host, "x.ai") || shExpMatch(host, "*.twitter.com")) {
        return "PROXY bksirlancelot-my-grok-unlocked.hf.space:443";
    }
    return "DIRECT";
}
