import {
    getCommonHeader,
    getCommonContainer,
    getCommonSubHeader
  } from "egov-ui-framework/ui-config/screens/specs/utils";
  import { OpeningBalanceReviewDetails } from "./viewopeningbalenceResource/openingbalance-review";
  import { setRolesList } from "./viewMaterialMasterResource/functions";
  
  export const header = getCommonContainer({
    header: getCommonHeader({
      labelName: "Material Mater - Summary",
      labelKey: "STORE_MATERIAL_MASTER_SUMMARY_HEADER"
    })
  });
  
  export const subHeader = getCommonContainer({
    subHeader: getCommonSubHeader({
      labelName:
        "Verify entered details before submission.",
      labelKey: "STORE_PURCHASE_ORDER_SUB_HEADER"
    })
  });
  
  const OpeningBalanceReview = MasterReviewDetails(true);
  
  const screenConfig = {
    uiFramework: "material-ui",
    name: "reviewmaterialmaster",
    beforeInitScreen: (action, state, dispatch) => {
      // COMMA SEPARATED ROLES IN REVIEW SCREEN
      setRolesList(state, dispatch);
      return action;
    },
    components: {
      div: {
        uiFramework: "custom-atoms",
        componentPath: "Div",
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
                  sm: 10
                },
                ...header
              },
              subHeader: {
                gridDefination: {
                  xs: 12,
                  sm: 10
                },
                ...subHeader
              }
            }
          },
          OpeningBalanceReview
        }
      }
    }
  };
  
  export default screenConfig;
  