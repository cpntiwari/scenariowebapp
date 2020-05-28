import { Palette } from "../themes/Palette";
import { Opacity } from "../themes/Opacity";

export const Tokens = {
  colors: {
    lightTheme: {
      // THEME TOKENS
      white: Palette.colors.common.white,
      black: Palette.colors.common.black,
      bgPaper: Palette.colors.common.white,
      bgDefault: Palette.colors.cornflower["50"],
      primaryMain: Palette.colors.byBlue["800"],
      secondaryMain: Palette.colors.darkBlueGrey["900"],
      errorMain: Palette.colors.red["400"],
      warningMain: Palette.colors.orange["A700"],
      infoMain: Palette.colors.byBlue["800"],
      successMain: Palette.colors.green["500"],
      textPrimary: Palette.colors.darkBlueGrey["800"],
      textSecondary: Palette.colors.darkBlueGrey["600"],
      textDisabled: Palette.colors.darkBlueGrey["800"] + Opacity.alpha.A50,
      textHint: Palette.colors.darkBlueGrey["500"],
      textIcon: Palette.colors.common.black + Opacity.alpha.A25,
      actionHover: Palette.colors.byBlue["400"] + Opacity.alpha.A10,
      actionSelected: Palette.colors.byBlue["400"],
      divider: Palette.colors.grey["200"],
      dividerLight: Palette.colors.grey["400"] + Opacity.alpha.A25,
      grey: {
        50: Palette.colors.grey["50"],
        100: Palette.colors.grey["100"],
        200: Palette.colors.grey["200"],
        300: Palette.colors.grey["300"],
        400: Palette.colors.grey["400"],
        500: Palette.colors.grey["500"],
        600: Palette.colors.grey["600"],
        700: Palette.colors.grey["700"],
        800: Palette.colors.grey["800"],
        900: Palette.colors.grey["900"],
        A100: Palette.colors.grey["A100"],
        A200: Palette.colors.grey["A200"],
        A400: Palette.colors.grey["A400"],
        A700: Palette.colors.grey["A700"]
      },

      //OVERRIDE TOKENS
      appBarColor: Palette.colors.blue["800"],
      drawerItemMenuHover: Palette.colors.common.black + Opacity.alpha.A19,
      drawerBg: Palette.colors.blueGrey["900"],
      drawerText: Palette.colors.common.white,
      drawerHoverBorder: Palette.colors.byBlue["400"],
      breadCrumbInactive: Palette.colors.common.white + Opacity.alpha.A48,
      themeDivider: Palette.colors.grey["300"],
      tooltipBg: Palette.colors.darkBlueGrey["800"],
      themeGradient:
        "linear-gradient(180deg, " +
        Palette.colors.byBlue["800"] +
        " 0%, " +
        Palette.colors.cornflower["50"] +
        " 100%)",
      bgDecorA: Palette.colors.blue["800"],
      bgDecorB: Palette.colors.byBlue["400"],
      tableBorder: Palette.colors.grey["300"],
      tableTextHead: Palette.colors.grey["600"],
      tableRowBgAlt: Palette.colors.cornflower["50"] + Opacity.alpha.A50,
      paperOutline: Palette.colors.darkBlueGrey["100"],
      snackbarBg: Palette.colors.darkBlueGrey["900"],
      badgeBg: Palette.colors.red["600"],
      circularProgressColor: Palette.colors.cornflower["50"],
      luiHeaderContrastText: Palette.colors.common.white,
      luiWeekNumberColumnBg: Palette.colors.common.black + Opacity.alpha.A05,
      datePickerWhiteBgDisabled:
        Palette.colors.common.white + Opacity.alpha.A50,
      skeletonLight: Palette.colors.common.black + Opacity.alpha.A05,
      exceptionFilterColor: Palette.colors.common.white,
      undefined: Palette.colors.lime["A400"], // DEBUG VALUE

      // CHART TOKENS
      chartByBlue: Palette.colors.byBlue["700"],
      chartYellow: Palette.colors.yellow["700"],
      chartPink: Palette.colors.pink["500"],
      chartPurple: Palette.colors.purple["600"],
      chartGreen: Palette.colors.green["500"],
      chartOrange: Palette.colors.orange["600"],
      chartLime: Palette.colors.lime["600"],
      chartDarkBlueGrey: Palette.colors.darkBlueGrey["500"],
      chartBlue: Palette.colors.blue["A400"],
      chartCornflower: Palette.colors.cornflower["500"],
      chartbyDarkBlue: Palette.colors.byDarkBlue["A400"],
      chartTeal: Palette.colors.teal["500"],

      chartBg0: Palette.colors.blue["A400"],
      chartBg1: Palette.colors.cornflower["50"],

      // PRIORITY STRIP
      priority: {
        0: Palette.colors.grey["400"],
        1: Palette.colors.red["400"],
        2: Palette.colors.purple["300"],
        3: Palette.colors.orange["600"],
        4: Palette.colors.green["500"]
      },

      // NOTIFICATION
      notificationBg: Palette.colors.cornflower["50"],
      notificationDivider: Palette.colors.grey["200"],
      notificationTextColor: Palette.colors.darkBlueGrey["900"],
      notificationStatusIconBg: Palette.colors.byBlue[400],
      notificationStatusIconText: Palette.colors.common.white,
      notificationBlue: Palette.colors.blue["500"],
      notificationGrey: Palette.colors.grey["500"],
      notificationTitle: Palette.colors.common.black,
      notificationIconColor: Palette.colors.byBlue[800],
      headerChip: Palette.colors.green["500"],

      // ITEM LIST
      messageStatusGreen: Palette.colors.green["500"],
      messageStatusGrey: Palette.colors.grey["300"],
      borderGrey: Palette.colors.grey["200"],

      // PRODUCT TOKENS
      navAnalytics: Palette.colors.purple["300"],
      navControlTower: Palette.colors.byBlue["400"],
      navExceptions: Palette.colors.teal["A400"],
      navGeneric: Palette.colors.byBlue["400"],
      navHome: Palette.colors.lime["A700"],
      navInsights: Palette.colors.purple["300"],
      navInvestigations: Palette.colors.teal["A400"],
      navLiveView: Palette.colors.orange["A200"],

      // Border Linear Progress
      borderLinearBackgroundColor: Palette.colors.grey["300"],
      borderLinearBarColor: Palette.colors.red["400"],

      // COLLABORATION TOKENS
      collabMemberStatus: Palette.colors.green["500"],
      collabHeaderBorder: Palette.colors.grey["400"],
      scenarioPollNotification: Palette.colors.cornflower["50"],
      replyMessageLeftBorder: Palette.colors.byBlue["800"],
      scenarioIconColor: Palette.colors.green["500"],
      scenarioPollIconColor: Palette.colors.byBlue["800"],
      collabTabsHeader: Palette.colors.grey["500"],
      collabTextFieldBackground: Palette.colors.common.white,
      messageBoxTextFieldBorder: Palette.colors.darkBlueGrey["800"],
      collabMemberHeader: Palette.colors.cornflower["50"],
      collapseHeading: Palette.colors.grey["300"],
      collabExtraMember: Palette.colors.common.black,
    },
    darkTheme: {
      // THEME TOKENS
      white: Palette.colors.common.white,
      black: Palette.colors.common.black,
      bgPaper: Palette.colors.byDarkBlue["A400"],
      bgDefault: Palette.colors.darkBlueGrey["A700"],
      primaryMain: Palette.colors.byBlue["400"],
      primaryContrastText: Palette.colors.common.white, // OVERRIDING ACCESSIBLE CONTRAST
      secondaryMain: Palette.colors.common.white,
      errorMain: Palette.colors.red["400"],
      warningMain: Palette.colors.orange["A700"],
      infoMain: Palette.colors.byBlue["800"],
      successMain: Palette.colors.green["500"],
      textPrimary: Palette.colors.common.white,
      textSecondary: Palette.colors.darkBlueGrey["100"],
      textDisabled: Palette.colors.common.white + Opacity.alpha.A50,
      textHint: Palette.colors.darkBlueGrey["400"],
      actionHover: Palette.colors.byBlue["400"] + Opacity.alpha.A10,
      actionSelected: Palette.colors.byBlue["400"],
      divider: Palette.colors.common.white,
      dividerLight: Palette.colors.grey["400"] + Opacity.alpha.A25,
      grey: {
        50: Palette.colors.grey["50"],
        100: Palette.colors.grey["100"],
        200: Palette.colors.grey["200"],
        300: Palette.colors.grey["300"],
        400: Palette.colors.grey["400"],
        500: Palette.colors.grey["500"],
        600: Palette.colors.grey["600"],
        700: Palette.colors.grey["700"],
        800: Palette.colors.grey["800"],
        900: Palette.colors.grey["900"],
        A100: Palette.colors.grey["A100"],
        A200: Palette.colors.grey["A200"],
        A400: Palette.colors.grey["A400"],
        A700: Palette.colors.grey["A700"]
      },

      //OVERRIDE TOKENS
      appBarColor: Palette.colors.byDarkBlue["A200"] + Opacity.alpha.A70,
      drawerItemMenuHover: Palette.colors.common.black + Opacity.alpha.A19,
      drawerBg: Palette.colors.byDarkBlue["900"],
      drawerText: Palette.colors.common.white,
      drawerHoverBorder: Palette.colors.byBlue["400"],
      breadCrumbInactive: Palette.colors.common.white + Opacity.alpha.A48,
      fabPrimaryDisabled: Palette.colors.common.white + Opacity.alpha.A50,
      tooltipBg: Palette.colors.darkBlueGrey["800"],
      themeDivider: Palette.colors.common.white + Opacity.alpha.A30,
      themeGradient:
        "linear-gradient(180deg, " +
        Palette.colors.byDarkBlue["A700"] +
        " 0%, " +
        Palette.colors.darkBlueGrey["A700"] +
        " 100%)",
      bgDecorA: Palette.colors.byDarkBlue["A200"],
      bgDecorB: Palette.colors.byDarkBlue["A200"],
      tableBorder: Palette.colors.common.white + Opacity.alpha.A08,
      tableTextHead: Palette.colors.grey["600"],
      tableRowBgAlt: Palette.colors.cornflower["50"] + Opacity.alpha.A08,
      paperOutline: Palette.colors.byBlue["400"] + Opacity.alpha.A30,
      snackbarBg: Palette.colors.darkBlueGrey["800"],
      menuListBg: Palette.colors.byDarkBlue["A200"],
      badgeBg: Palette.colors.red["600"],
      circularProgressColor: Palette.colors.cornflower["50"],
      luiHeaderContrastText: Palette.colors.common.white,
      luiWeekNumberColumnBg: Palette.colors.common.black + Opacity.alpha.A15,
      datePickerWhiteBgDisabled:
        Palette.colors.common.white + Opacity.alpha.A50,
      skeltonDark: Palette.colors.common.white + Opacity.alpha.A05,
      undefined: Palette.colors.lime["A400"], // DEBUG VALUE
      exceptionFilterColor: Palette.colors.common.white,

      // CHART TOKENS
      chartByBlue: Palette.colors.byBlue["700"],
      chartYellow: Palette.colors.yellow["700"],
      chartPink: Palette.colors.pink["500"],
      chartPurple: Palette.colors.purple["600"],
      chartGreen: Palette.colors.green["500"],
      chartOrange: Palette.colors.orange["600"],
      chartLime: Palette.colors.lime["600"],
      chartDarkBlueGrey: Palette.colors.darkBlueGrey["500"],
      chartBlue: Palette.colors.blue["A400"],
      chartCornflower: Palette.colors.cornflower["500"],
      chartbyDarkBlue: Palette.colors.byDarkBlue["A400"],
      chartTeal: Palette.colors.teal["500"],

      chartBg0: Palette.colors.common.black,
      chartBg1: Palette.colors.blueGrey["A700"],

      // PRIORITY STRIP
      priority: {
        0: Palette.colors.grey["400"],
        1: Palette.colors.red["400"],
        2: Palette.colors.purple["300"],
        3: Palette.colors.orange["600"],
        4: Palette.colors.green["500"]
      },

      // NOTIFICATION
      notificationBg: Palette.colors.cornflower["50"],
      notificationDivider: Palette.colors.grey["200"],
      notificationTextColor: Palette.colors.darkBlueGrey["900"],
      notificationStatusIconBg: Palette.colors.byBlue[400],
      notificationStatusIconText: Palette.colors.common.white,
      notificationBlue: Palette.colors.blue["500"],
      notificationGrey: Palette.colors.grey["500"],
      notificationTitle: Palette.colors.common.black,
      notificationIconColor: Palette.colors.byBlue[800],
      headerChip: Palette.colors.green["500"],

      // ITEM LIST
      messageStatusGreen: Palette.colors.green["500"],
      messageStatusGrey: Palette.colors.grey["300"],
      borderGrey: Palette.colors.grey["200"],

      // PRODUCT TOKENS
      navAnalytics: Palette.colors.purple["300"],
      navControlTower: Palette.colors.byBlue["400"],
      navExceptions: Palette.colors.teal["A400"],
      navGeneric: Palette.colors.byBlue["400"],
      navHome: Palette.colors.lime["A700"],
      navInsights: Palette.colors.purple["300"],
      navInvestigations: Palette.colors.teal["A400"],
      navLiveView: Palette.colors.orange["A200"],

      // Border Linear Progress
      borderLinearBackgroundColor: Palette.colors.grey["300"] + Opacity.alpha.A50,
      borderLinearBarColor: Palette.colors.red["400"],

      // COLLABORATION TOKENS
      collabMemberStatus: Palette.colors.green["500"],
      collabHeaderBorder: Palette.colors.grey["400"],
      scenarioPollNotification: Palette.colors.byDarkBlue["A200"],
      replyMessageLeftBorder: Palette.colors.byBlue["800"],
      scenarioIconColor: Palette.colors.green["500"],
      scenarioPollIconColor: Palette.colors.byBlue["800"],
      collabTabsHeader: Palette.colors.grey["500"],
      collabTextFieldBackground: Palette.colors.common.white,
      messageBoxTextFieldBorder: Palette.colors.darkBlueGrey["800"],
      collabMemberHeader: Palette.colors.byDarkBlue["A200"],
      collapseHeading: Palette.colors.grey["300"],
      collabExtraMember: Palette.colors.common.black,
    }
  },
  sizing: {
    textNormal: "0.875rem",
    textLarge: "1rem",
    textSmall: ".75rem",
    title1: "1.875rem",
    title2: "1.5rem",
    title3: "1.125rem",
    title4: "1rem",
    title5: "1.125rem",
    title6: "1.25rem",
    iconSm: "1.25rem",
    iconReg: "1.5rem",
    iconLg: "2.5rem"
  },
  opacity: {
    transparentColor: Palette.colors.common.black + Opacity.alpha.A00, // 00 === 0% OPACITY
    none: "0",
    faint: "8%",
    fade: "30%",
    semi: "50%",
    full: "100%",

    /*
     ** OPACITY ALPHA VALUES REPRESENTING AA OF `#RRGGBBAA`
     ** SHOULD BE USED WITH COLOR TOKENS, AS IN
     ** `Token.color.lightTheme.grey["50"]+Token.opacity.A50`
     */
    A00: Opacity.alpha.A00,
    A05: Opacity.alpha.A05,
    A08: Opacity.alpha.A08,
    A10: Opacity.alpha.A10,
    A20: Opacity.alpha.A20,
    A25: Opacity.alpha.A25,
    A30: Opacity.alpha.A30,
    A40: Opacity.alpha.A40,
    A50: Opacity.alpha.A50,
    A60: Opacity.alpha.A60,
    A70: Opacity.alpha.A70,
    A75: Opacity.alpha.A75,
    A80: Opacity.alpha.A80,
    A90: Opacity.alpha.A90,
    A100: Opacity.alpha.A100
  }
};
