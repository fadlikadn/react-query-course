const possibleStatus = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "Todo" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "cancel", label: "Cancel" },
]
const StatusSelect = ({value, onChange}) => {
  return <select value={value} onChange={onChange} className="status-select">
    <option value="">Select a status to filter</option>
    {possibleStatus.map((status) =>
      <option value={status.id} key={status.id}>
        {status.label}
      </option>
    )}
  </select>
};

export default StatusSelect;