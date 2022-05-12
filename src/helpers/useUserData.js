import { useQuery } from "react-query";

const useUserData = (userId) => {
  const usersData = useQuery(
    ["users", userId],
    async () => {
      if (!userId) {
        console.log(userId);
        // await new Promise((resolve) => setTimeout(() => {
        //   resolve();
        // }, 200));
      }
      return fetch(`/api/users/${userId}`).then(res => res.json())
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return usersData;
}

export default useUserData;