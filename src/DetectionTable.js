import { Table } from "@mantine/core";

const DetectionTable = ({ message, duration }) => {
  // Update duration so that it displays how long each detection has been active for
  const getLiveDuration = (startTime) => {
    const newDuration = duration - startTime;
    const minutes = Math.floor(newDuration / 60);
    const seconds = newDuration % 60;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Start Time</Table.Th>
          <Table.Th>Band</Table.Th>
          <Table.Th>Classification</Table.Th>
          <Table.Th>RSSI</Table.Th>
          <Table.Th>Duration</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {(message?.detections || []).map((element, key) => (
          <Table.Tr key={key}>
            <Table.Td>{element.drone_id}</Table.Td>
            <Table.Td>{element.start_time}</Table.Td>
            <Table.Td>{element.band}</Table.Td>
            <Table.Td>{element.classification}</Table.Td>
            <Table.Td>{element.rssi}</Table.Td>
            <Table.Td>{getLiveDuration(element.start_time)}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default DetectionTable;
