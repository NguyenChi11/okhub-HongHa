"use client";

import { BookingData } from "@/app/all-tour/[slug]/page";
import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

import React from "react";

type Item = {
  index?: number;
  name?: string;
  accommodation?: string;
  vehicle?: string;
  tour_Group?: string;
  transport?: string;
  price?: number;
  oldPrice?: number;
  newPrice?: number;
  description?: string;
  time?: string; // ✅ optional
  map?: string; // ✅ optional
  slug?: string;
};

type ListComponentProps = {
  items: Item;
  bookingData: BookingData;
};

const Receipt = ({ items, bookingData }: ListComponentProps) => {
  return (
    <div className="max-w-[42rem] mx-auto p-[1rem]">
      <Card className="bg-gray-50">
        <CardContent className="p-[1.5rem]">
          <div className="space-y-0">
            {/* Type of tour */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Type of tour
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">{items.name}</div>
            </div>

            <hr className="border-gray-200" />

            {/* Name */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Name
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">
                {bookingData.name}
                <span className="font-semibold text-gray-900">3 pax</span>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Contact Info
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">
                {bookingData.email} - {bookingData.phone}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Pick up */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Pick up
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">
                <div className="font-semibold text-gray-900">15/9/2023</div>
                <div>
                  from Hanoi at{" "}
                  <span className="font-semibold text-gray-900">20:00</span>
                </div>
                <div>
                  Hong Hao Hostel No. 10 Pham Hong Thai, Minh Khai Ward, Ha Noi
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Tour duration */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Tour duration
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">3 Days 4 Nights</div>
            </div>

            <hr className="border-gray-200" />

            {/* Drop off */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Drop off
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">
                <span className="font-semibold text-gray-900">18/9/2023</span> -
                My Dinh Station, Ha Noi
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Self-driving */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Self-driving
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">
                <span className="font-semibold text-gray-900">01</span> x $
                {items.oldPrice}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Easy driver */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Easy driver
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">
                <span className="font-semibold text-gray-900">02</span> x $
                {items.newPrice}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Message */}
            <div className="flex flex-col sm:flex-row py-[1rem]">
              <div className="font-semibold text-gray-900 min-w-[8.75rem] sm:border-r sm:border-gray-200 sm:pr-[1rem]">
                Message
              </div>
              <div className="text-gray-600 sm:pl-[1rem]">
                {bookingData.message}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Receipt;
