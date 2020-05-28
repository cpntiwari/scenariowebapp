import { createMuiTheme } from '@material-ui/core/styles';
import { Tokens } from '../themes/Tokens';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Overrides } from '@material-ui/core/styles/overrides';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      white: Tokens.colors.darkTheme.white,
      black: Tokens.colors.darkTheme.black
    },
    background: {
      paper: Tokens.colors.darkTheme.bgPaper,
      default: Tokens.colors.darkTheme.bgDefault,
    },
    primary: {
      main: Tokens.colors.darkTheme.primaryMain,
      contrastText: Tokens.colors.darkTheme.primaryContrastText, // OVERRIDING ACCESSIBLE CONTRAST
    },
    secondary: {
      main: Tokens.colors.darkTheme.secondaryMain,
    },
    error: {
      main: Tokens.colors.darkTheme.errorMain
    },
    warning: {
      main: Tokens.colors.darkTheme.warningMain,
    },
    info: {
      main: Tokens.colors.darkTheme.infoMain
    },
    success: {
      main: Tokens.colors.darkTheme.successMain,
    },
    text: {
      primary: Tokens.colors.darkTheme.textPrimary,        // DEFAULT === rgba(0,0,0,0.87)
      // secondary: Tokens.colors.darkTheme.textSecondary, // DEFAULT === rgba(0,0,0,0.54)
      disabled: Tokens.colors.darkTheme.textDisabled,      // DEFAULT === rgba(0,0,0,0.38)
      // hint: Tokens.colors.darkTheme.textHint,           // DEFAULT === rgba(0,0,0,0.12)
      icon: 'rgba(0,0,0,0.5)'
    },
    action: {
      hover: Tokens.colors.darkTheme.actionHover,   // DEFAULT === rgba(0,0,0,0.87)
      hoverOpacity: 0.1,                                    // DEFAULT === 0.04
      selected: Tokens.colors.darkTheme.actionSelected,    // DEFAULT === rgba(0,0,0,0.08)
      disabled: Tokens.colors.darkTheme.textDisabled,      // DEFAULT === rgba(0,0,0,0.12)
    },
    divider: Tokens.colors.darkTheme.divider,
    contrastThreshold: 3,                                   // DEFAULT === 3
    tonalOffset: 0.2,                                       // DEFAULT === 0.2
    grey: {
      50: Tokens.colors.darkTheme.grey["50"],
      100: Tokens.colors.darkTheme.grey["100"],
      200: Tokens.colors.darkTheme.grey["200"],
      300: Tokens.colors.darkTheme.grey["300"],
      400: Tokens.colors.darkTheme.grey["400"],
      500: Tokens.colors.darkTheme.grey["500"],
      600: Tokens.colors.darkTheme.grey["600"],
      700: Tokens.colors.darkTheme.grey["700"],
      800: Tokens.colors.darkTheme.grey["800"],
      900: Tokens.colors.darkTheme.grey["900"],
      A100: Tokens.colors.darkTheme.grey["A100"],
      A200: Tokens.colors.darkTheme.grey["A200"],
      A400: Tokens.colors.darkTheme.grey["A400"],
      A700: Tokens.colors.darkTheme.grey["A700"]
    },
  },
  direction: 'ltr',
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: Tokens.sizing.title1,
      fontWeight: 400,
    },
    h2: {
      fontSize: Tokens.sizing.title2,
      fontWeight: 500,
    },
    h3: {
      fontSize: Tokens.sizing.title3,
      fontWeight: 500,
    },
    h4: {
      fontSize: Tokens.sizing.title4,
      fontWeight: 500,
    },
    h5: {
      fontSize: Tokens.sizing.title5,
      fontWeight: 500
    },
    body1: {
      fontSize: Tokens.sizing.textNormal,
      fontWeight: 400
    },
    body2: {
      fontSize: Tokens.sizing.textSmall,
      fontWeight: 400
    },
    button: {
      fontSize: Tokens.sizing.textSmall,
      textTransform: 'capitalize'
    }
  },
  props: {},
} as ThemeOptions);

theme.overrides = {

  // OVERRIDE COLOR VALUES SHOULD COME FROM THEME ABOVE
  MuiTypography: {
    root: {
      color: theme.palette.text.primary
    }
  },

  MuiButtonBase: {
    root: {
      color: theme.palette.text.primary
    }
  },

  MuiLink: {
    root: {
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'none',
      '&:hover': {
        color: theme.palette.primary.dark
      },
      '&:active': {
        color: theme.palette.primary.light
      }
    }
  },

  MuiButtonGroup: {
    root: {
      '& .MuiButton-sizeLarge': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(0),
        width: theme.spacing(12),
        height: theme.spacing(5),
        left: theme.spacing(0),
        top: theme.spacing(0),
        textAlign: 'center',
        textTransform: 'capitalize',
        fontFamily: theme.typography.fontFamily,
        '& .MuiButton-label': {
          fontFamily: theme.typography.fontFamily,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: theme.typography.fontSize,
          lineHeight: Tokens.sizing.title6,
        }
      },
      '& .MuiButton-sizeSmall': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(0),
        width: theme.spacing(12),
        height: theme.spacing(4),
        left: theme.spacing(0),
        top: theme.spacing(0),
        textAlign: 'center',
        textTransform: 'capitalize',
        fontFamily: theme.typography.fontFamily,
        '& .MuiButton-label': {
          fontFamily: theme.typography.fontFamily,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: theme.typography.fontSize,
          lineHeight: Tokens.sizing.title6,
        }
      },
      '& .MuiButtonGroup-groupedOutlinedSecondary': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(0),
        width: theme.spacing(8),
        height: theme.spacing(5),
        left: theme.spacing(0),
        top: theme.spacing(0),
        textAlign: 'center',
        textTransform: 'capitalize',
        '&:hover': {
          borderColor: Tokens.colors.lightTheme.infoMain,
        }
      },
      '& .MuiSvgIcon-root': {
        fontSize: Tokens.sizing.title6,
      },
      '& .splitButtonIcon': {
        width: theme.spacing(5),
        height: theme.spacing(4)
      },
      '& .splitButtonText': {
        width: 'auto',
        padding: theme.spacing(0.5, 2)
      }
    },
  },

  MuiButton: {
    root: {
      height: theme.spacing(4),
      fontSize: theme.spacing(1.75),
      lineHeight: theme.spacing(0)
    },
    sizeSmall: {
      ...theme.typography.button,
      fontSize: theme.spacing(1.5),
      height: theme.spacing(3.75),
      lineHeight: theme.spacing(0)
    },
    sizeLarge: {
      ...theme.typography.button,
      fontSize: theme.spacing(2),
      height: theme.spacing(4.5),
      lineHeight: theme.spacing(0)
    },
    containedPrimary: {
      '&$disabled': {
        backgroundColor: theme.palette.grey["400"],
        color: theme.palette.primary.contrastText
      }
    },
    outlinedPrimary: {
      backgroundColor: Tokens.opacity.transparentColor,
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.light,
      },
      '&$disabled': {
        borderColor: theme.palette.text.disabled,
      },
    },
    outlinedSecondary: {
      '&$disabled': {
        borderColor: theme.palette.text.disabled,
      }
    }
  },
  MuiFab: {
    primary: {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[4],
      '&:hover': {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.secondary.dark,
      },
      '&:active': {
        boxShadow: theme.shadows[10]
      },
      '&$disabled': {
        backgroundColor: Tokens.colors.darkTheme.fabPrimaryDisabled
      }
    },
  },

  MuiTooltip: {
    arrow: {
      color: Tokens.colors.darkTheme.tooltipBg,
      fontSize: 9
    },
    tooltip: {
      maxWidth: '90vw',
      padding: theme.spacing(1.25, 2),
      fontWeight: theme.typography.fontWeightRegular,
      margin: theme.spacing(0),
      backgroundColor: Tokens.colors.darkTheme.tooltipBg,
      color: theme.palette.getContrastText(Tokens.colors.darkTheme.tooltipBg),
      fontSize: Tokens.sizing.textLarge,
      boxShadow: theme.shadows[6],
      '&PlacementBottom&,&PlacementTop&': {
        margin: theme.spacing(1, 0)
      },
      '&PlacementLeft&,&PlacementRight&': {
        margin: theme.spacing(0, 1)
      },
    }
  },

  MuiSlider: {
    root: {
      height: 3,
      padding: '15px 0',
      '&$disabled': {
        color: theme.palette.grey["400"],
      }
    },
    rail: {
      height: 4,
      borderRadius: 6,
      backgroundColor: theme.palette.grey["400"],
      opacity: Tokens.opacity.semi,
    },
    track: {
      height: 4,
      opacity: Tokens.opacity.semi,
      '$disabled &': {
        opacity: Tokens.opacity.none
      }
    },
    thumb: {
      height: theme.spacing(2),
      width: theme.spacing(2),
      marginTop: theme.spacing(-.75),
      boxShadow: theme.shadows[4],
      '&$disabled': {
        height: theme.spacing(2),
        width: theme.spacing(2),
        marginTop: theme.spacing(-.75),
        boxShadow: theme.shadows[0]
      }
    },
    disabled: {
      track: {
        opacity: Tokens.opacity.none
      }
    }
  },

  MuiChip: {
    root: {
      fontSize: Tokens.sizing.textSmall,
      borderRadius: theme.spacing(3.75),
      backgroundColor: theme.palette.grey["600"],
      fontWeight: theme.typography.fontWeightBold
    },
  },

  MuiFormControlLabel: {
    label: {
      fontSize: Tokens.sizing.textLarge,
      fontWeight: theme.typography.fontWeightMedium
    }
  },

  MuiSelect: {
    select: {
      '&:focus': {
        backgroundColor: Tokens.opacity.transparentColor
      }
    }
  },

  MuiMenu: {
    paper: {
      boxShadow: theme.shadows[8]
    }
  },

  MuiMenuItem: {
    root: {
      fontSize: Tokens.sizing.textLarge,
      fontWeight: 'normal',
    },
  },

  MuiInputBase: {
    input: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    }
  },

  MuiInput: {
    underline: {
      '&:hover:not(.Mui-disabled):before': {
        borderBottomWidth: '2px'
      },
      "&$disabled:before": {
        borderBottomStyle: 'solid',
      }
    }
  },

  MuiFormLabel: {
    root: {
      color: theme.palette.text.disabled,
      fontSize: Tokens.sizing.textLarge
    }
  },

  MuiTabs: {
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      "& .MuiTabs-flexContainer button.MuiButtonBase-root": {
        borderBottomWidth: 'thin',
        borderBottomStyle: 'solid',
        borderBottomColor: Tokens.colors.darkTheme.themeDivider,
        "&.Mui-disabled": {
          opacity: Tokens.opacity.full,
          '& span': {
            opacity: Tokens.opacity.semi,
          }
        }
      }
    },
    indicator: {
      backgroundColor: theme.palette.primary.main,
      height: theme.spacing(.5)

    }
  },

  MuiTab: {
    root: {
      fontWeight: theme.typography.fontWeightBold,

    },
    textColorInherit: {
      fontSize: Tokens.sizing.textLarge,
      opacity: 1,
      '&:hover': {
        color: theme.palette.primary.main
      },
      '&:focus': {
        color: theme.palette.primary.main
      }
    },
    selected: {
      color: theme.palette.primary.main,
    }
  },

  MuiCardHeader: {
    avatar: {
      '& > .MuiSvgIcon-root': {
        verticalAlign: 'top'
      }
    },
    action: {
      marginTop: theme.spacing(-.5),
      marginBottom: theme.spacing(-.5),
      '& .MuiSvgIcon-root': {
        fillOpacity: '25%'
      }
    }
  },

  MuiCardContent: {
    root: {
      ...theme.typography.body1,
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: '1.5714285714',
      '&:last-child': {
        paddingBottom: theme.spacing(2)
      }
    }
  },

  MuiCardActions: {
    root: {
      justifyContent: 'flex-end',
    }
  },

  MuiMobileStepper: {
    root: {
      backgroundColor: theme.palette.background.paper
    },
    dot: {
      backgroundColor: theme.palette.grey["400"]
    }
  },
  MuiStepIcon: {
    root: {
      color: theme.palette.grey["400"]
    },
    text: {
      color: theme.palette.primary.contrastText,
    },
    completed: {
      // DESIGN CALLS FOR WHITE TEXT ON PRIMARY COLOR
      // BGCOLOR AND RADIUS SET TO MATCH DESIGN TEXT COLOR
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: '50%',
    }
  },
  MuiDialogTitle: {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
  },
  MuiDialogContent: {
    dividers: {
      borderColor: Tokens.colors.darkTheme.themeDivider,
      borderBottom: 'none'
    }
  },
  MuiAppBar: {
    root: {
      boxShadow: theme.shadows[0],
    },
    colorPrimary: {
      backgroundColor: Tokens.colors.darkTheme.appBarColor,
    }
  },
  MuiAvatar: {
    root: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    }
  },
  MuiDrawer: {
    root: {
      '& .MuiButtonBase-root': {
        '& > svg,  & .MuiListItemText-root svg': {
          fontSize: Tokens.sizing.title6,
        },
      },
      '& .MuiCollapse-container': {
        '& .MuiButtonBase-root': {
          '&.Mui-selected': {
            '& .MuiListItemText-root span': {
              color: theme.palette.getContrastText(Tokens.colors.darkTheme.drawerBg),
            },
            '& > svg.MuiSvgIcon-root': {
              color: theme.palette.getContrastText(Tokens.colors.darkTheme.drawerBg),
            },
          },
          '&:hover': {
            backgroundColor: Tokens.colors.lightTheme.drawerItemMenuHover,
            borderLeftColor: 'transparent',
            borderLeftWidth: theme.spacing(0),
            borderLeftStyle: 'none',
            paddingLeft: theme.spacing(11),
            '& svg.MuiSvgIcon-root': {
              color: theme.palette.getContrastText(Tokens.colors.darkTheme.drawerBg),
            }
          },
          '& > svg': {
            color: Tokens.colors.darkTheme.white + Tokens.opacity.A40,
          }
        },
        '& .MuiListItem-root.Mui-selected': {
          background: 'transparent',
        },
      },
      '& div.MuiCollapse-container': {
        '& .MuiListItemText-root span': {
          color: Tokens.colors.darkTheme.white + Tokens.opacity.A40,
        },
        '& .MuiListItem-button:hover': {
          background: Tokens.colors.darkTheme.drawerItemMenuHover,
          '& span, & svg': {
            color: Tokens.colors.darkTheme.white,
          }
        },
      },
    },
    paper: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      backgroundColor: Tokens.colors.darkTheme.drawerBg,
      '&AnchorDockedLeft&': {
        borderColor: Tokens.colors.darkTheme.drawerBg,
      },
      '& .MuiTypography-root': {
        color: Tokens.colors.darkTheme.drawerText,
        fontSize: theme.spacing(2),
      },
      '& .MuiListItem-gutters': {
        padding: theme.spacing(.5, 1)
      },
      '& .MuiListItem-button': {
        '&:hover': {
          backgroundColor: Tokens.colors.darkTheme.drawerItemMenuHover,
          borderLeftColor: Tokens.colors.darkTheme.drawerHoverBorder,
          borderLeftWidth: theme.spacing(.625),
          borderLeftStyle: 'solid',
          paddingLeft: theme.spacing(.375), // GUTTER WIDTH - BORDER WIDTH
        }
      },
      '& .MuiList-root': {
        padding: theme.spacing(0),
        backgroundColor: Tokens.opacity.transparentColor
      },
      '& .MuiListItemIcon-root': {
        '& .MuiSvgIcon-fontSizeLarge': {
          margin: theme.spacing(0.8125, 0.8125, 0.8125, 0.6875), // CENTERS ICONS -- FORMULA (3REM - 2.1875REM)/2 -- 2.1875REM === fontSizeLarge
        },
      },
    }
  },

  MuiList: {
    root: {
      backgroundColor: Tokens.colors.darkTheme.menuListBg
    },
  },

  MuiDivider: {
    root: {
      opacity: Tokens.opacity.fade
    },
    light: {
      opacity: Tokens.opacity.full,
      backgroundColor: Tokens.colors.darkTheme.dividerLight,
    }
  },
  MuiBreadcrumbs: {
    li: {
      fontSize: theme.spacing(2),
      color: Tokens.colors.darkTheme.breadCrumbInactive,

      '& .MuiLink-root': {
        //Remove capitalization if the element is a Link
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover': {
          color: theme.palette.common.white,
          textDecoration: 'none'
        },
      },

      //Adjust last child element
      '&:last-child .MuiTypography-root': {
        color: theme.palette.common.white,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.spacing(2),
        textDecoration: 'none'
      }
    },
    separator: {
      color: Tokens.colors.darkTheme.breadCrumbInactive
    }
  },
  MuiExpansionPanel: {
    root: {
      "&$expanded": {
        margin: theme.spacing(0),
      },
      //Remove auto added borderline in favor of borderbottom
      '&:before': {
        content: 'none'
      },
      borderBottomColor: Tokens.colors.darkTheme.themeDivider,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
    }
  },
  MuiExpansionPanelSummary: {
    root: {
      padding: theme.spacing(0, 2),
      '& .MuiTypography-root': {
        fontWeight: theme.typography.fontWeightMedium
      },
      '& .MuiIconButton-root': {
        color: theme.palette.text.primary
      },
      height: theme.spacing(6),
      "&$expanded": {
        height: theme.spacing(6),
        'min-height': 'auto'
      }
    }
  },
  MuiExpansionPanelDetails: {
    root: {
      padding: theme.spacing(0, 2, 2)
    }
  },

  MuiTableCell: {
    root: {
      fontSize: Tokens.sizing.textNormal,
      borderBottomColor: Tokens.colors.darkTheme.tableBorder,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
    },
    head: {
      color: theme.palette.text.hint,
      fontSize: Tokens.sizing.textSmall,
      fontWeight: theme.typography.fontWeightRegular,
      padding: theme.spacing(1.5, 2),
    },
    body: {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightRegular
    },
    sizeSmall: {
      padding: theme.spacing(1, 2)
    }
  },
  MuiTableHead: {
    root: {
      '& .MuiTableRow-root:hover': {
        background: 'none',
      }
    }
  },
  MuiTableRow: {
    root: {
      '&:nth-child(even)': {
        backgroundColor: Tokens.colors.darkTheme.tableRowBgAlt,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    }
  },
  MuiPaper: {
    root: {
      '& .MuiListItem-root,& .MuiListItem-root:hover': {
        '&.Mui-selected': {
          backgroundColor: Tokens.colors.darkTheme.actionHover
        },
      },
    },
    outlined: {
      borderColor: Tokens.colors.darkTheme.paperOutline
    },
  },
  MuiPickersBasePicker: {
    container: {
      backgroundColor: Tokens.colors.darkTheme.menuListBg,
      '& .MuiPickersCalendarHeader-transitionContainer p': {
        fontSize: theme.spacing(2),
        fontWeight: theme.typography.fontWeightRegular,
      },
      '& .MuiPickersCalendarHeader-iconButton': {
        padding: theme.spacing(1.5),
        margin: theme.spacing(0, 0.5),
      },
    }
  },
  MuiPickersCalendarHeader: {
    iconButton: {
      backgroundColor: Tokens.colors.darkTheme.menuListBg
    }
  },
  MuiListItem: {
    root: {
      paddingTop: theme.spacing(0.875),
      paddingBottom: theme.spacing(0.875)
    }
  },
  MuiListItemText: {
    root: {
      color: theme.palette.text.primary
    }
  },

  MuiSnackbarContent: {
    root: {
      backgroundColor: Tokens.colors.darkTheme.snackbarBg,
      color: theme.palette.getContrastText(Tokens.colors.darkTheme.snackbarBg),
      fontSize: Tokens.sizing.textNormal,
      fontWeight: theme.typography.fontWeightMedium
    },
    message: {
      verticalAlign: 'center'
    }
  },
  MuiAlert: {
    root: {
      fontSize: Tokens.sizing.textNormal,
      fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
      alignItems: 'center',
    }
  },
  MuiBadge: {
    badge: {
      color: theme.palette.error.contrastText,
      backgroundColor: Tokens.colors.darkTheme.badgeBg,
      fontSize: Tokens.sizing.textSmall,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: Tokens.sizing.textNormal,
      minWidth: theme.spacing(2.25),
      height: theme.spacing(2.25),
      padding: theme.spacing(0.25, 0.75)
    },
    anchorOriginBottomRightCircle: {
      right: theme.spacing(0),
      bottom: theme.spacing(1),
      transform: "scale(.75) translate(100%, 5%)",
    }
  },
  MuiBackdrop: {
    root: {
      zIndex: theme.zIndex.drawer + 1,
      color: theme.palette.common.white,
      MuiCircularProgress: {
        circle: {
          color: Tokens.colors.darkTheme.circularProgressColor
        }
      }
    }
  },
  MuiDialog: {
    root: {
      '& .MuiBackdrop-root': {
        zIndex: 'auto'
      },
    }
  },
  MuiTablePagination: {
    root: {
      '& .MuiTablePagination-spacer': {
        flex: 1,
      },
      '& p.MuiTypography-body2, & .MuiSelect-selectMenu, & nav ul li button': {
        fontSize: theme.typography.fontSize,
        lineHeight: Tokens.sizing.title6,
      },
      '& .MuiSelect-selectMenu': {
        textAlign: 'left',
        textAlignLast: 'left',
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(0),
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
      },
      '& .MuiPaginationItem-page.MuiPaginationItem-textPrimary.Mui-selected:hover': {
        background: 'transparent',
      },
      '& nav ul li button.Mui-selected': {
        color: Tokens.colors.darkTheme.infoMain,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: Tokens.sizing.title4,
        backgroundColor: "transparent",
      },
      [theme.breakpoints.down('sm')]: {
        '& .MuiTablePagination-selectRoot, & .MuiTablePagination-spacer + p': {
          display: 'none',
        }
      }
    }
  },
  MuiPagination: {
    root: {
      '& ul li button.MuiPaginationItem-page': {
        fontSize: theme.typography.fontSize,
        lineHeight: Tokens.sizing.title6,
      },
      '& .MuiPagination-ul li button.Mui-selected': {
        color: Tokens.colors.lightTheme.infoMain,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: Tokens.sizing.title4,
        backgroundColor: 'transparent',
      }
    }
  }
} as Overrides;

export const DarkTheme = theme;
