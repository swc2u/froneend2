import { getLabel } from "egov-ui-framework/ui-config/screens/specs/utils";
import { setRoute } from "egov-ui-framework/ui-redux/app/actions";
import { getQueryArg } from "egov-ui-framework/ui-utils/commons";
import { showHideAdhocPopup } from "../../utils";
import { handleCreateUpdateEmployee } from "./functions";

const gotoCreateFlow = (state, dispatch) => {
  const employeeCode = getQueryArg(window.location.href, "employeeID");
  const tenantId = getQueryArg(window.location.href, "tenantId");
  const createUrl =
    process.env.REACT_APP_SELF_RUNNING === "true"
      ? `/egov-ui-framework/hrms/create?employeeCode=${employeeCode}&tenantId=${tenantId}`
      : `/hrms/create?employeeCode=${employeeCode}&tenantId=${tenantId}`;
  dispatch(setRoute(createUrl));
};

const getCommonCreateFooter = children => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: {
      className: "apply-wizard-footer"
    },
    children
  };
};

export const masterCommonFooter = () => {
  return getCommonCreateFooter({
    submitButton: {
      componentPath: "Button",
      props: {
        variant: "contained",
        color: "primary",
        style: {
          minWidth: "200px",
          height: "48px",
          marginRight: "45px"
        }
      },
      children: {
        submitButtonLabel: getLabel({
          labelName: "SUBMIT",
          labelKey: "STORE_SUBMIT_LABEL"
        })
      },
      onClickDefination: {
        action: "condition",
        callBack: handleCreateUpdateEmployee
      }
    }
  });
};

export const masterViewFooter = () => {
  return getCommonCreateFooter({
   
    editDetails: {
      componentPath: "Button",
      props: {
        variant: "contained",
        color: "primary",
        style: {
          minWidth: "200px",
          height: "48px",
          marginRight: "45px"
        }
      },
      children: {
        editDetailsButtonLabel: getLabel({
          labelName: "EDIT DETAILS",
          labelKey: "STORE_EDIT_DETAILS_LABEL"
        }),
        editDetailsButtonIcon: {
          uiFramework: "custom-atoms",
          componentPath: "Icon",
          props: {
            iconName: "keyboard_arrow_right"
          }
        }
      },
      onClickDefination: {
        action: "condition",
        callBack: gotoCreateFlow
      }
    }
  });
};
