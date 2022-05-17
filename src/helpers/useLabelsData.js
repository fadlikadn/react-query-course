import {useQuery} from "react-query";
import { defaultLabels } from "./defaultData";

const useLabelsData = () => {
  const labelsQuery = useQuery(
    ["labels"],
    ({ signal }) => fetch("/api/labels", { signal }).then((res) => res.json()),
    {
      staleTime: 1000 * 60 * 60,
      placeholderData: defaultLabels,
    },
  );

  return labelsQuery;
}

export default useLabelsData;