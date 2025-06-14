import React from "react";

const Table = ({ setCreateShipmentModal, allShipmentsData }) => {
  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return dateTime;
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="items-start jusitfy-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Create Tracking
          </h3>
          <p className="text-gray-600 mt-2">
            Create a new shipment tracking record.
          </p>
        </div>

        <div className="mt-3 md:mt-0">
          <p
            onClick={() => setCreateShipmentModal(true)}
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 md:text-sm rounded-lg md:inline-flex"
          >
            Add Tracking
          </p>
        </div>
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-6 py-3 text-left">Sender</th>
              <th className="px-6 py-3 text-left">Receiver</th>
              <th className="px-6 py-3 text-left">Pickup Time</th>
              <th className="px-6 py-3 text-left">Distance</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Delivery Time</th>
              <th className="px-6 py-3 text-left">Paid</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y divide-gray-200">
            {allShipmentsData?.map((shipment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.sender.slice(0, 15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.receiver.slice(0, 15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {convertTime(shipment.pickupTime)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.distance} km
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.deliveryTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.isPaid ? "Completed" : "Not Completed"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.status === "0"
                    ? "Pending"
                    : shipment.status === "1"
                    ? "In Transit"
                    : "Delivered"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
