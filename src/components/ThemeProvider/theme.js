// Full list of tokens
const baseTokens = {
    rgbBlack: '0 0 0',
    rgbWhite: '255 255 255',
    bezierFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    durationXS: '200ms',
    durationS: '300ms',
    durationM: '400ms',
    durationL: '600ms',
    durationXL: '800ms',
    systemFontStack:
        'system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif',
    fontStack: `Gotham, var(--systemFontStack)`,
    monoFontStack:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    japaneseFontStack:
        'IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeightTitle: '1.1',
    lineHeightBody: '1.6',
    maxWidthS: '540px',
    maxWidthM: '720px',
    maxWidthL: '1096px',
    maxWidthXL: '1680px',
    spaceOuter: '64px',
    spaceXS: '4px',
    spaceS: '8px',
    spaceM: '16px',
    spaceL: '24px',
    spaceXL: '32px',
    space2XL: '48px',
    space3XL: '64px',
    space4XL: '96px',
    space5XL: '128px',
    zIndex0: 0,
    zIndex1: 4,
    zIndex2: 8,
    zIndex3: 16,
    zIndex4: 32,
    zIndex5: 64,
};

// Tokens that change based on viewport size
const tokensDesktop = {};

const tokensLaptop = {
    maxWidthS: '480px',
    maxWidthM: '640px',
    maxWidthL: '1000px',
    maxWidthXL: '1100px',
    spaceOuter: '48px',
};

const tokensTablet = {};

const tokensMobile = {
    spaceOuter: '24px',
};

const tokensMobileSmall = {
    spaceOuter: '16px',
};

// Tokens that change based on theme
const dark = {
    themeId: 'dark',
    rgbBackground: '17 17 17',
    rgbBackgroundLight: '26 26 26',
    rgbPrimary: '0 229 255',
    rgbAccent: '0 229 255',
    rgbText: '255 255 255',
    rgbError: '255 55 102',
    colorTextTitle: 'rgb(var(--rgbText) / 1)',
    colorTextBody: 'rgb(var(--rgbText) / 0.8)',
    colorTextLight: 'rgb(var(--rgbText) / 0.6)',
};

const light = {
    themeId: 'light',
    rgbBackground: '242 242 242',
    rgbBackgroundLight: '255 255 255',
    rgbPrimary: '0 0 0',
    rgbAccent: '0 229 255',
    rgbText: '0 0 0',
    rgbError: '255 0 60',
    colorTextTitle: 'rgb(var(--rgbText) / 1)',
    colorTextBody: 'rgb(var(--rgbText) / 0.8)',
    colorTextLight: 'rgb(var(--rgbText) / 0.6)',
};

export const tokens = {
    base: baseTokens,
    desktop: tokensDesktop,
    laptop: tokensLaptop,
    tablet: tokensTablet,
    mobile: tokensMobile,
    mobileS: tokensMobileSmall,
};

export const theme = {dark, light};
