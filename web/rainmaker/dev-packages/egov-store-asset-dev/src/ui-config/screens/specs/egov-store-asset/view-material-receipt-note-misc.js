import {
  getCommonHeader,
  getLabel,
  getCommonContainer
} from "egov-ui-framework/ui-config/screens/specs/utils";
import get from "lodash/get";
import { MaterialReceiptReviewDetails } from "./viewMaterialReceiptNoteMiscResource/receipt-note-review";
import { masterViewFooter } from "./viewMaterialReceiptNoteMiscResource/footer";
import { getmiscellaneousreceiptnotes } from "./viewMaterialReceiptNoteMiscResource/functions";
import { showHideAdhocPopup } from "../utils";
import { getTenantId } from "egov-ui-kit/utils/localStorageUtils";
import { httpRequest } from "../../../../ui-utils";
import { prepareFinalObject } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import { setRoute } from "egov-ui-framework/ui-redux/app/actions";
import { getQueryArg } from "egov-ui-framework/ui-utils/commons";
import{WorkFllowStatus} from '../../../../ui-utils/sampleResponses'
let IsEdit = false;
let Status = getQueryArg(window.location.href, "Status");
let ConfigStatus = WorkFllowStatus().WorkFllowStatus;
ConfigStatus = ConfigStatus.filter(x=>x.code === Status)
if(ConfigStatus.length >0)
IsEdit = true;
export const header = getCommonContainer({
  header: getCommonHeader({
    labelName: `Miscellaneous Material Receipt Note`,
    labelKey: "STORE_MATERIAL_RECEIPT_MATERIAL_MISC_HEADER"
  })
});

const createMatrialMiscReceiptHandle = async (state, dispatch) => {

  let id = getQueryArg(window.location.href, "id");
  dispatch(setRoute(`/egov-store-asset/createMaterialReceiptNoteMisc?id=${id}`));
};
const creatPOHandle = async (state, dispatch) => {
  let indents = get(
    state.screenConfiguration.preparedFinalObject,
    `indents`,
    []
  );
  let indentNumber = indents[0].indentNumber;
  dispatch(setRoute(`/egov-store-asset/create-purchase-order?indentNumber=${indentNumber}`));
};
const masterView = MaterialReceiptReviewDetails(false);
const getMdmsData = async (action, state, dispatch, tenantId) => {
  const tenant = tenantId || getTenantId();
  let mdmsBody = {
    MdmsCriteria: {
      tenantId: tenant,
      moduleDetails: [
        {
          moduleName: "egov-hrms",
          masterDetails: [
            {
              name: "DeactivationReason",
              filter: "[?(@.active == true)]"
            }
          ]
        }
      ]
    }
  };
  try {
    const payload = await httpRequest(
      "post",
      "/egov-mdms-service/v1/_search",
      "_search",
      [],
      mdmsBody
    );
    dispatch(prepareFinalObject("viewScreenMdmsData", payload.MdmsRes));
  } catch (e) {
    console.log(e);
  }
};

const screenConfig = {
  uiFramework: "material-ui",
  name: "view-material-receipt-note-misc",
  beforeInitScreen: (action, state, dispatch) => {
    let id = getQueryArg(window.location.href, "id");
    let tenantId = getQueryArg(window.location.href, "tenantId");
    getmiscellaneousreceiptnotes(state, dispatch, id, tenantId);
   // showHideAdhocPopup(state, dispatch);
    getMdmsData(action, state, dispatch, tenantId);
    return action;
  },
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Form",
      props: {
        className: "common-div-css"
      },
      children: {
        headerDiv: {
          uiFramework: "custom-atoms",
          componentPath: "Container",
          children: {
            header: {
              gridDefination: {
                xs: 12,
                sm: 6,
              },
              ...header
            },
            newApplicationButton: {
              componentPath: "Button",
              gridDefination: {
                xs: 12,
                sm: 6,
                align: "right",
              },
              visible: true,// enableButton,
              props: {
                variant: "contained",
                color: "primary",
                style: {
                  color: "white",
                  borderRadius: "2px",
                  width: "250px",
                  height: "48px",
                },
              },

              children: {
                plusIconInsideButton: {
                  uiFramework: "custom-atoms",
                  componentPath: "Icon",
                  props: {
                    iconName: "add",
                    style: {
                      fontSize: "24px",
                    },
                  },
                },

                buttonLabel: getLabel({
                  labelName: "Add Misc. Material Receipt",
                  labelKey: "STORE_ADD_NEW_MATERIAL_RECEIPT_MSC_BUTTON",
                }),
              },
              onClickDefination: {
                action: "condition",
                callBack: createMatrialMiscReceiptHandle,
              },
            },
            newPOButton: {
              componentPath: "Button",            
              visible: true,// enableButton,
              props: {
                variant: "contained",
                color: "primary",
                style: {
                  color: "white",
                  borderRadius: "2px",
                  width: "250px",
                  height: "48px",
                },
              },

              children: {
                plusIconInsideButton: {
                  uiFramework: "custom-atoms",
                  componentPath: "Icon",
                  props: {
                    iconName: "add",
                    style: {
                      fontSize: "24px",
                    },
                  },
                },

                buttonLabel: getLabel({
                  labelName: "Add Purchase Order",
                  labelKey: "STORE_ADD_NEW_PURCHASE_ORDR_BUTTON",
                }),
              },
              onClickDefination: {
                action: "condition",
                callBack: creatPOHandle,
              },
            },
          }
        },
        masterView,
        footer: IsEdit? masterViewFooter():{},
      }
    },
   
    
  }
};

export default screenConfig;
