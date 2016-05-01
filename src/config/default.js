import LastFmPlugin from 'plugins/LastFmPlugin';
import HelpPlugin from 'plugins/HelpPlugin';
import UrlTitlePlugin from 'plugins/UrlTitlePlugin';
import AutoRejoinPlugin from 'plugins/AutoRejoinPlugin';
import WeatherUndergroundPlugin from 'plugins/WeatherUndergroundPlugin';

let lastFmOpts = {
    api_key: '467b4068bb8b4774f972e95e8bd2d81f',
    secret: 'a62a330dc620c528440cf9e4c6a30261',
    templates: {
        'np': "%user% is currently listening to %title% by %artist%.",
        'not_np': '%user% is currently not listening to anything.'
    }
};

let weatherOpts = {
    api_key: '0347d23efc0576af'
};

let corePlugins = [
    new HelpPlugin(),
    new AutoRejoinPlugin(1000)
];

let plugins = [
    new LastFmPlugin(lastFmOpts.api_key, lastFmOpts.secret, lastFmOpts.templates),
    new WeatherUndergroundPlugin(weatherOpts.api_key),
    new UrlTitlePlugin()
];

export default {
    preferences: {
        prefix: "!"
    },

    /*server: {
        hostname: "irc.p2p-network.net",
        port: "6667",
        SSL: false,
        nick: "norbert-beta",
        fullname: "Norbert.The.Bot",
        channels: [
            "#420"
        ]
    },*/

server: {
        hostname: "irc.freenode.net",
        port: "6667",
        SSL: false,
        nick: "norbert-beta",
        fullname: "Norbert.The.Bot",
        channels: [
            "##phpbottalk"
        ]
    },

    database: {
        type: "sqlite3",
        location: "Norbert.sqlite"
    },

    plugins: corePlugins.concat(plugins)

};