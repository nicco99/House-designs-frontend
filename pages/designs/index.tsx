import { NextPageWithLayout } from "../page";
import Designs from "../../modules/Designs";
const DesignsPage: NextPageWithLayout = () => {
  return <Designs />;
};

DesignsPage.getLayout = (page) => page;

export default DesignsPage;
