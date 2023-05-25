import getSession from "./getSession";

const getUser = async () => {
  const session = await getSession();
};

export default getUser;
