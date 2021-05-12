import { getCommonCard, getCommonContainer, getDateField, getLabel, getPattern,} from "egov-ui-framework/ui-config/screens/specs/utils";
// import { searchAPICall, SearchDashboardData, SearchPGRDashboardData } from "./functions";
import { SearchLegalDashboardData } from "./LegalFunction";
import { handleScreenConfigurationFieldChange as handleField } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import './index.css';

export const DashboardFilterForm = getCommonCard({
  FilterConstraintsContainer: getCommonContainer({
    fromDate: getDateField({
      label: { labelName: "From Date", labelKey: "DASHBOARD_FROM_DATE_LABEL" },
      placeholder: {
        labelName: "",
        labelKey: "Select From Date"
      },
      props: {
        style : {
          width : "130px"
        }
      },
      gridDefination: {
        xs: 6,
        sm: 2,
        md: 2
      },
      pattern: getPattern("Date"),
      jsonPath: "dahsboardHome.defaultFromDate",
      required: true,
      afterFieldChange: (action, state, dispatch) => {
        dispatch(
          handleField(
            "LegalDashboard",
            "components.div.children.DashboardFilterForm.children.cardContent.children.FilterConstraintsContainer.children.toDate",
            "props.inputProps.min",
            action.value
          )
        );
        }
    }),
    toDate: getDateField({
      label: { labelName: "To Date", labelKey: "DASHBOARD_TO_DATE_LABEL" },
      placeholder: {
        labelName: "To Date",
        labelKey: "Select To Date"
      },
      props: {
        style : {
          width : "130px"
        },
        inputProps: {
          min: ''
        }
      },
      gridDefination: {
        xs: 6,
        sm: 2,
        md: 2
      },
      pattern: getPattern("Date"),
      jsonPath: "dahsboardHome.defaulttoDate",
      required: true,
    }),
    moduleDashboardDropdown: {
      uiFramework: "custom-containers-local",
      moduleName: "egov-dashboard",
      componentPath: "AutosuggestContainer",
      jsonPath: "dahsboardHome.dropDownData2",
      required: true,
      gridDefination: {
            xs: 6,
            sm: 2,
            md: 2
          },
      props: {
        style: {
        width: "200%",
        cursor: "pointer"
      },
  
      className: "citizen-city-picker",
      label: { labelName: "Report Type", labelKey: "DASHBOARD_DROPDOWN_REPORT_TYPE_LABEL" },
      placeholder: {
        labelName: "",
        labelKey: "Select Module"
      },
      sourceJsonPath: "dahsboardHome.dropDownData",
      jsonPath: "dahsboardHome.dropDownData2",
      maxLength:5,
      labelsFromLocalisation: false,
      suggestions: [],
      fullwidth: true,
      // required: true,
      inputLabelProps: {
        shrink: true
      },
      isMulti: false,
      labelName: "name",
      valueName: "name"
      },
    
    },
    searchButton: {
      componentPath: "Button",
      gridDefination: {
        xs: 6,
        sm: 2,
        md: 2
      },
      props: {
        variant: "contained",
        color: "primary",
        style: {
        width: "60%",
        height: "55px",
        /* margin-right: 80px; */
        marginLeft: "180px"
        }
      },
      children: {
        buttonLabel: getLabel({
          labelName: "Search",
          labelKey: "DASHBOARD_SEARCH_BTN_LABEL"
        })
      },
      onClickDefination: {
        action: "condition",
        callBack: (state, dispatch) => {
          SearchLegalDashboardData(state, dispatch)
        }
      }
    },
  })
});

export const DashboardResults = {
  uiFramework: "custom-molecules-local",
  moduleName: "egov-dashboard",
  componentPath: "DashboardLegal",
  props: {
  // className: "dashboard-graph",
  formKey: `newapplication`,
  data : []
  },
  style: {
  },
  visible: true,
}