import {
  getCommonGrayCard,
  getCommonSubHeader,
  getCommonContainer,
  getLabelWithValue,
  getLabel,
  getDivider
} from "egov-ui-framework/ui-config/screens/specs/utils";
import { convertEpochToDateAndHandleNA, handleNA } from '../../utils';
import { changeStep } from "./footer";

const getHeader = label => {
  return {
    uiFramework: "custom-molecules-local",
    moduleName: "egov-wns",
    componentPath: "DividerWithLabel",
    props: {
      className: "hr-generic-divider-label",
      labelProps: {},
      dividerProps: {},
      label
    },
    type: "array"
  };
};

const connectionDetailsHeader = getHeader({
  labelKey: "WS_COMMON_CONNECTION_DETAILS"
});

const connectionChargeDetailsHeader = getHeader({
  labelKey: "WS_COMMON_PLUMBER_DETAILS"
});

const roadCuttingChargesHeader = getHeader({
  labelKey: "WS_ROAD_CUTTING_CHARGE_DETAILS"
});
const otherChargesDetailsHeader =  getHeader({
  labelKey: "WS_ROAD_CUTTING_CHARGE_DETAILS"
});

const activationDetailsHeader = getHeader({
  labelKey: "WS_ACTIVATION_DETAILS"
});

export const reviewConnectionType = getLabelWithValue(
  {
    labelName: "Connection Type",
    labelKey: "WS_SERV_DETAIL_CONN_TYPE"
  },
  {
    jsonPath: "applyScreen.connectionType",
    callBack: handleNA
    // callBack: value => {
    //   return value.split(".")[0];
    // }
  }
);
export const reviewNumberOfTaps = getLabelWithValue(
  {
    labelName: "No. of Taps",
    labelKey: "WS_SERV_DETAIL_NO_OF_TAPS"
  },
  {
    jsonPath: "applyScreen.noOfTaps",
    callBack: handleNA
  }
);
export const reviewWaterSource = getLabelWithValue(
  {
    labelName: "Water Source",
    labelKey: "WS_SERV_DETAIL_WATER_SOURCE"
  },
  {
    jsonPath: "applyScreen.waterSource",
    callBack: handleNA
  }
);
export const reviewWaterSubSource = getLabelWithValue(
  {
    labelName: "Water Sub Source",
    labelKey: "WS_SERV_DETAIL_WATER_SUB_SOURCE"
  },
  {
    jsonPath: "applyScreen.waterSubSource",
    callBack: handleNA
  }
);
export const reviewPipeSize = getLabelWithValue(
  {
    labelName: "Pipe Size (in inches)",
    labelKey: "WS_SERV_DETAIL_PIPE_SIZE"
  },
  {
    jsonPath: "applyScreen.pipeSize",
    callBack: handleNA
  }
);
export const reviewccCode = getLabelWithValue(
  {
    labelName: "CC Code",
    labelKey: "WS_SERV_DETAIL_CC_CODE"
  },
  {
    jsonPath: "WaterConnection[0].ccCode",
    callBack: handleNA
  }
);
export const reviewledgerGroup = getLabelWithValue(
  {
    labelName: "ledgerGroup",
    labelKey: "WS_SERV_DETAIL_LEDGER_GROUP"
  },
  {
    jsonPath: "applyScreen.ledgerGroup",
    callBack: handleNA
  }
);
export const reviewdivision = getLabelWithValue(
  {
    labelName: "Division",
    labelKey: "WS_SERV_DETAIL_DIVISION"
  },
  {
    jsonPath: "applyScreen.div",
    callBack: handleNA
  }
);
export const reviewsubdiv = getLabelWithValue(
  {
    labelName: "Sub Division",
    labelKey: "WS_SERV_DETAIL_SUB_DIVISION"
  },
  {
    jsonPath: "applyScreen.subdiv",
    callBack: handleNA
  }
);
export const reviewledgerNo = getLabelWithValue(
  {
    labelName: "Ledge No",
    labelKey: "WS_SERV_DETAIL_LEDGER_NO"
  },
  {
    jsonPath: "applyScreen.ledgerNo",
    callBack: handleNA
  }
);

export const reviewWaterClosets = getLabelWithValue(
  {
    labelName: "No. of Water Closets",
    labelKey: "WS_ADDN_DETAILS_NO_OF_WATER_CLOSETS"
  },
  {
    jsonPath: "applyScreen.noOfWaterClosets",
    callBack: handleNA
  }
);

export const reviewNumberOfToilets = getLabelWithValue(
  {
    labelName: "No. of Water Closets",
    labelKey: "WS_ADDN_DETAILS_NO_OF_TOILETS"
  },
  {
    jsonPath: "applyScreen.noOfToilets",
    callBack: handleNA
  }
);

export const reviewPlumberProvidedBy = getLabelWithValue(
  {
    labelName: "Plumber Provided By",
    labelKey: "WS_ADDN_DETAILS_PLUMBER_PROVIDED_BY"
  },
  {
    jsonPath: "applyScreen.additionalDetails.detailsProvidedBy",
    callBack: handleNA
  }
);
export const reviewPlumberLicenseNo = getLabelWithValue(
  {
    labelName: "Plumber License No.",
    labelKey: "WS_ADDN_DETAILS_PLUMBER_LICENCE_NO_LABEL"
  },
  {
    jsonPath: "applyScreen.plumberInfo[0].licenseNo",
    callBack: handleNA
  }
);
export const reviewPlumberName = getLabelWithValue(
  {
    labelName: "Plumber Name",
    labelKey: "WS_ADDN_DETAILS_PLUMBER_NAME_LABEL"
  },
  { jsonPath: "applyScreen.plumberInfo[0].name",
    callBack: handleNA }
);

export const reviewPlumberMobileNo = getLabelWithValue(
  {
    labelName: "Plumber Mobile No.",
    labelKey: "WS_ADDN_DETAILS_PLUMBER_MOB_NO_LABEL"
  },
  {
    jsonPath: "applyScreen.plumberInfo[0].mobileNumber",
    callBack: handleNA
  }
);

export const reviewRoadType = getLabelWithValue(
  {
    labelName: "Road Type",
    labelKey: "WS_ADDN_DETAIL_ROAD_TYPE"
  },
  {
    jsonPath: "applyScreen.roadType",
    callBack: handleNA
    // callBack: convertEpochToDate
  }
);

export const reviewArea = getLabelWithValue(
  {
    labelName: "Area (in sq ft)",
    labelKey: "WS_ADDN_DETAILS_AREA_LABEL"
  },
  {
    jsonPath: "applyScreen.roadCuttingArea",
    callBack: handleNA
  }
);
export const reviewSecurityCharge = getLabelWithValue(
  {
    labelName: "Security Charges",
    labelKey: "WS_ADDN_DETAILS_SECURITY_CHARGES_LABEL"
  },
  {
    jsonPath: "applyScreen.waterApplication.securityCharge",
    callBack: handleNA
  }
);
export const reviewisFerruleApplicable = getLabelWithValue(
  {
    labelName: "Ferrule Applicable",
    labelKey: "WS_ADDN_DETAILS_IS_FERRULEAPPLICABLE"
  },
  {
    jsonPath: "WaterConnection[0].waterApplication.isFerruleApplicable",
    callBack: handleNA
  }
);
export const reviewisIsMeterStolen = getLabelWithValue(
  {
    labelName: "Is this is a case of theft of meter",
    labelKey: "WS_ADDN_DETAILS_IS_METER_STOLEN"
  },
  {
    jsonPath: "WaterConnection[0].waterApplication.isMeterStolen",
    callBack: handleNA
  }
);
export const reviewadditionalCharges = getLabelWithValue(
  {
    labelName: "Additional Charges",
    labelKey: "WS_ADDN_DETAILS_ADDITIONAL_CHARGES_LABEL"
  },
  {
    jsonPath: "WaterConnection[0].waterApplication.additionalCharges",
    callBack: handleNA
  }
);
export const reviewconstructionCharges = getLabelWithValue(
  {
    labelName: "Construction Charges",
    labelKey: "WS_ADDN_DETAILS_CONSTRUCTION_CHARGES_LABEL"
  },
  {
    jsonPath: "WaterConnection[0].waterApplication.constructionCharges",
    callBack: handleNA
  }
);
export const reviewConnectionExecutionDate = getLabelWithValue(
  {
    labelName: "Connection Execution Date",
    labelKey: "WS_SERV_DETAIL_CONN_EXECUTION_DATE"
  },
  {
    jsonPath: "applyScreen.connectionExecutionDate",
    callBack: convertEpochToDateAndHandleNA
  }
);
export const reviewMeterId = getLabelWithValue(
  {
    labelName: "Meter ID",
    labelKey: "WS_SERV_DETAIL_METER_ID"
  },
  { jsonPath: "applyScreen.meterId",
    callBack: handleNA }
);

export const reviewMeterInstallationDate = getLabelWithValue(
  {
    labelName: "Meter Installation Date",
    labelKey: "WS_ADDN_DETAIL_METER_INSTALL_DATE"
  },
  {
    jsonPath: "applyScreen.meterInstallationDate",
    callBack: convertEpochToDateAndHandleNA
  }
);

export const reviewInitialMeterReading = getLabelWithValue(
  {
    labelName: "Initial Meter Reading",
    labelKey: "WS_ADDN_DETAILS_INITIAL_METER_READING"
  },
  { jsonPath: "applyScreen.additionalDetails.initialMeterReading",
    callBack: handleNA }
);
export const reviewlastMeterReading = getLabelWithValue(
  {
    labelName: "Initial Meter Reading",
    labelKey: "WS_ADDN_DETAILS_INITIAL_METER_READING"
  },
  { jsonPath: "applyScreen.additionalDetails.lastMeterReading",
    callBack: handleNA }
);
export const reviewMeterCount = getLabelWithValue(
  {
    labelName: "Meter Count",
    labelKey: "WS_ADDN_DETAILS_INITIAL_METER_COUNT"
  },
  { jsonPath: "WaterConnection[0].meterCount",
    callBack: handleNA }
);
export const reviewmfrCode = getLabelWithValue(
  {
    labelName: "mfr Code",
    labelKey: "WS_SERV_DETAIL_MFRCODE"
  },
  { jsonPath: "applyScreen.mfrCode",
    callBack: handleNA }
);
export const reviewmeterDigits = getLabelWithValue(
  {
    labelName: "Meter Digits",
    labelKey: "WS_SERV_DETAIL_METER_DIGIT"
  },
  { jsonPath: "applyScreen.meterDigits",
    callBack: handleNA }
);
export const reviewmeterUnit = getLabelWithValue(
  {
    labelName: "Meter Unit",
    labelKey: "WS_SERV_DETAIL_METER_UNIT"
  },
  { jsonPath: "applyScreen.meterUnit",
    callBack: handleNA }
);
export const reviewsanctionedCapacity = getLabelWithValue(
  {
    labelName: "Sanctioned Capacity",
    labelKey: "WS_SERV_DETAIL_SANCTION_CAPACITY"
  },
  { jsonPath: "applyScreen.sanctionedCapacity",
    callBack: handleNA }
);
export const reviewmeterRentCode = getLabelWithValue(
  {
    labelName: "Meter Rent Code",
    labelKey: "WS_SERV_DETAIL_METER_RENT_CODE"
  },
  { jsonPath: "applyScreen.meterRentCode",
    callBack: handleNA }
);

export const reviewOwner = (isEditable = true) => {
  return getCommonGrayCard({
    headerDiv: {
      uiFramework: "custom-atoms",
      componentPath: "Container",
      props: {
        style: { marginBottom: "10px" }
      },
      children: {
        header: {
          gridDefination: {
            xs: 12,
            sm: 10
          },
          ...getCommonSubHeader({
            labelName: "Additional Details ( To be filled by Municipal Employee)",
            labelKey: "WS_COMMON_ADDN_DETAILS_HEADER"
          })
        },
        editSection: {
          componentPath: "Button",
          props: {
            color: "primary"
          },
          visible: isEditable,
          gridDefination: {
            xs: 12,
            sm: 2,
            align: "right"
          },
          children: {
            editIcon: {
              uiFramework: "custom-atoms",
              componentPath: "Icon",
              props: {
                iconName: "edit"
              }
            },
            buttonLabel: getLabel({
              labelName: "Edit",
              labelKey: "TL_SUMMARY_EDIT"
            })
          },
          onClickDefination: {
            action: "condition",
            callBack: (state, dispatch) => {
              changeStep(state, dispatch, "", 2);
            }
          }
        }
      }
    },
    // viewOne: propertyDetails,
    // viewTwo: propertyLocationDetails
    viewFive: connectionDetailsHeader,
    viewSix: connectionDetails,
    viewSeven: connectionChargeDetailsHeader,
    viewEight: connectionChargeDetails,
    viewNine: roadCuttingChargesHeader,
    viewTen: roadCuttingCharges,
    viewEleven: otherChargesDetailsHeader ,
    viewTwelve: otherChargesDetails,
    viewThirteen :activationDetailsHeader ,
    viewFourteen: activationDetails,
  })
};

const connectionDetails = getCommonContainer({
  reviewConnectionType,
  reviewNumberOfTaps,
  reviewWaterSource,
  reviewWaterSubSource,
  reviewPipeSize,
  // reviewBillingType,
  reviewdivision,
  reviewsubdiv,
  reviewledgerNo,
  reviewccCode,
  reviewWaterClosets,
  reviewNumberOfToilets,
  reviewledgerGroup
});

const connectionChargeDetails = getCommonContainer({
  reviewPlumberProvidedBy,
  reviewPlumberLicenseNo,
  reviewPlumberName,
  reviewPlumberMobileNo
});

const roadCuttingCharges = getCommonContainer({
  reviewRoadType,
  reviewArea
});
const otherChargesDetails =  getCommonContainer({
  reviewSecurityCharge,
  reviewisFerruleApplicable,
  reviewadditionalCharges,
  reviewconstructionCharges,
  reviewisIsMeterStolen,
});

const activationDetails = getCommonContainer({
  reviewConnectionExecutionDate,
  reviewMeterId,
  reviewMeterInstallationDate,
  reviewInitialMeterReading,
  reviewlastMeterReading,
  reviewmfrCode,
  reviewmeterDigits,
  reviewmeterUnit,
  reviewsanctionedCapacity,
  reviewmeterRentCode,
  reviewMeterCount,
});
