import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://smart-designs-backend.onrender.com/designs");
  const { data } = await res.json();

  const paths = data.map((design: any) => {
    return {
      params: { id: design.design_id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    "https://smart-designs-backend.onrender.com/designs/" + id
  );
  const data = await res.json();
  return {
    props: { design: data.data },
  };
};

const DesignPage: React.FC<{ design: any }> = ({ design }) => {

  return <div>{design.design_id}</div>;
};

export default DesignPage;
