import React from "react";
import IdyllDocument from "idyll-document";
import * as builtInComponents from "idyll-components";

import { MediaLayout } from "@khanacademy/wonder-blocks-core";
import { Row } from "@khanacademy/wonder-blocks-grid";

/*
   Configuration bits here!
   ========================
*/

const documentName = "main.idyll";

const components = {
  ...builtInComponents
  /* Add any custom components you want to use here. */
};

//===========================================================================

const Document = ({ documents }) => (
  <MediaLayout>
    <Row>
      <IdyllDocument
        markup={documents.get(documentName)}
        components={components}
      />
    </Row>
  </MediaLayout>
);

export default Document;
