import {
    getStepperObject, getCommonCard, getCommonTitle, getCommonParagraph
  } from "egov-ui-framework/ui-config/screens/specs/utils";
import {propertyDetails} from './propertyDetails';
import {rentHolderDetails, applicantDetails} from './rentHolderDetails';
import {addressDetails, ownershipAddressDetails} from './addressDetails';
import {rentDetails} from './rentDetails';
import {paymentDetails} from './paymentDetails'
import {documentList} from './documentList'
import {rentedReviewDetails} from './reviewDetails'


const documentCardConfig = {
  header: getCommonTitle(
    {
      labelName: "Required Documents",
      labelKey: "TL_NEW-UPLOAD-DOCS_HEADER"
    },
    {
      style: {
        marginBottom: 18
      }
    }
  ),
  paragraph: getCommonParagraph({
    labelName:
      "Only one file can be uploaded for one document. If multiple files need to be uploaded then please combine all files in a pdf and then upload",
    labelKey: "TL_NEW-UPLOAD-DOCS_SUBHEADER"
  }),
}

export const rentedDocumentsDetails = getCommonCard({
  ...documentCardConfig,
  documentList
});


export const ownershipTransferDocumentsDetails = getCommonCard({
  ...documentCardConfig,
  documentList
});


export const stepsData = [
    { labelName: "Details", labelKey: "RP_COMMON_TR_DETAILS" },
    { labelName: "Documents", labelKey: "TL_COMMON_DOCS" },
    { labelName: "Summary", labelKey: "TL_COMMON_SUMMARY" }
  ];

export const stepper = getStepperObject(
    { props: { activeStep: 0 } },
    stepsData
  );

  export const formwizardFirstStep = {
    uiFramework: "custom-atoms",
    componentPath: "Form",
    props: {
      id: "apply_form1"
    },
    children: {
      propertyDetails,
      addressDetails,
      rentHolderDetails,
      rentDetails,
      paymentDetails
    }
  };

  export const formwizardSecondStep = {
    uiFramework: "custom-atoms",
    componentPath: "Form",
    props: {
      id: "apply_form2"
    },
    children: {
      rentedDocumentsDetails
    },
    visible: false
  };

export const formwizardThirdStep = {
  uiFramework: "custom-atoms",
  componentPath: "Form",
  props: {
    id: "apply_form3"
  },
  children: {
    rentedReviewDetails
  },
  visible: false
}

export const formwizardOwnershipFirstStep = {
  uiFramework: "custom-atoms",
  componentPath: "Form",
  props: {
    id: "apply_fresh_licence"
  },
  children: {
    applicantDetails,
    ownershipAddressDetails
  }
};


export const formwizardOwnershipSecondStep = {
  uiFramework: "custom-atoms",
  componentPath: "Form",
  props: {
    id: "apply_form2"
  },
  children: {
    ownershipTransferDocumentsDetails
  },
  visible: false
};