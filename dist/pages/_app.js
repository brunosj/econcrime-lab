"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.css");
var next_themes_1 = require("next-themes");
var siteMetadata_1 = require("../utils/siteMetadata");
var next_i18next_1 = require("next-i18next");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<next_themes_1.ThemeProvider attribute='class' defaultTheme={siteMetadata_1.default.theme}>
      <Component {...pageProps}/>
    </next_themes_1.ThemeProvider>);
}
exports.default = (0, next_i18next_1.appWithTranslation)(MyApp);
