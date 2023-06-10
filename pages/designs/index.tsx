import { NextPageWithLayout } from "../page";
import Designs from "../../modules/Designs";

export const getStaticProps = async () => {
  const res = await fetch("https://smart-designs-backend.onrender.com/designs");
  const data = await res.json();
  return {
    props: { designs: data.data },
  };
};

const DesignsPage: NextPageWithLayout  = ({designs}) => {

  return <Designs designs={designs}/>;
};

DesignsPage.getLayout = (page) => page;

export default DesignsPage;
