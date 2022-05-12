import {useQuery} from "react-query";

const useLabelsData = () => {
  const labelsQuery = useQuery(
    ["labels"],
    () => fetch("/api/labels").then((res) => res.json()),
    {
      staleTime: 1000 * 60 * 60,
    },
  );

  return labelsQuery;
}

export default useLabelsData;