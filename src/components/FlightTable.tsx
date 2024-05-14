"use client";
import { Badge, Button, Checkbox, Label, Popover, Table } from "keep-react";
import {
  AirplaneTilt,
  CalendarBlank,
  ClipboardText,
  MagnifyingGlass,
  CurrencyDollar,
  DotsNine,
  Flag,
  Path,
  Tag,
  Wallet,
} from "phosphor-react";
import Image from "next/image";
import flightData from "@/data/FlightData.json";

export const FlightTable = () => {
  return (
    <div className="p-4">
      <Table>
        <Table.Caption>
          <div className="py-2 flex items-center justify-between border-t border-blue-400">
            <div className="flex items-center gap-5">
              <p className="text-lg flex gap-2 ml-6 font-medium text-metal-600">
                <Checkbox id="checked" variant="checked" className="mt-1" />{" "}
                Extra Options
              </p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-lg flex gap-2 ml-6 font-medium text-metal-600">
                <Checkbox id="circle" variant="circle" className="mt-1" />
                Environment
              </p>
              <p className="text-lg flex gap-2 ml-6 font-medium text-metal-600">
                <Checkbox id="circle" variant="circle" className="mt-1" />
                Dummy
              </p>
              <p className="text-lg flex gap-2 ml-6 font-medium text-metal-600">
                <Checkbox id="circle" variant="circle" className="mt-1" />
                PDF
              </p>
            </div>
            <div className="flex items-center gap-5 pr-2">
              <Button variant="outline" size="sm">
                <span>
                  <MagnifyingGlass size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
          <div className="py-2 flex items-center justify-between border-t border-b border-blue-400">
            <div className="flex items-center gap-5">
              <p className="text-lg ml-6 font-medium text-metal-600">
                Data parse successfully
              </p>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell
            className="min-w-[100px]"
            icon={<ClipboardText size={20} color="#8897AE" />}
            iconPosition="left"
          >
            <p className="text-body-5 font-medium text-metal-400">FLIGHT</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<AirplaneTilt size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">AIRCRAFT</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<DotsNine size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">CLASS</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<Wallet size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">FARE</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<Path size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">ROUTE</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<Tag size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">DEPARTURE</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<Flag size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">ARRIVAL</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<CalendarBlank size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">DURATION</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[100px]"
            iconPosition="left"
            icon={<CurrencyDollar size={20} color="#8897AE" />}
          >
            <p className="text-body-5 font-medium text-metal-400">PRICE</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {flightData.map((flight) => (
            <Table.Row key={flight.id} className="bg-white">
              <Table.Cell>
                {/* @ts-ignore */}
                {flight?.itineraries?.segments?.map((segment, index: any) => (
                  <p
                    key={index}
                    className="text-body-5 font-medium text-metal-500"
                  >
                    {segment?.carrierCode}
                    {segment?.flightNumber}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                {/* @ts-ignore */}
                {flight?.itineraries?.segments?.map((segment, index: any) => (
                  <p
                    key={index}
                    className="text-body-5 font-medium text-metal-500"
                  >
                    {segment?.aircraft}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                {flight?.class.map((classType, index: any) => (
                  <p
                    key={index}
                    className="text-body-5 font-medium text-metal-500"
                  >
                    {classType}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                {flight?.fareBasis.map((fare, index: any) => (
                  <p
                    key={index}
                    className="text-body-5 font-medium text-metal-500"
                  >
                    {fare}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                {/* @ts-ignore */}
                {flight?.itineraries?.segments?.map((segment, index: any) => (
                  <p
                    key={index}
                    className="text-body-5 font-medium text-metal-500"
                  >
                    {segment?.departure?.iataCode}-{segment?.arrival?.iataCode}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                {/* @ts-ignore */}
                {flight?.itineraries?.segments?.map((segment, index: any) => (
                  <p
                    key={index}
                    className="text-body-5 font-medium text-metal-500"
                  >
                    {segment?.departure?.at}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                {/* @ts-ignore */}
                {flight?.itineraries?.segments?.map((segment, index: any) => (
                  <p
                    key={index}
                    className="text-body-5 font-medium text-metal-500"
                  >
                    {segment?.arrival?.at}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {flight?.itineraries?.duration}
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {flight?.price}
                </p>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
