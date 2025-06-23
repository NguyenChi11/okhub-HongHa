"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./custom.module.css";
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { assets } from "@/app/public/assets/data/assets";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Item = {
  index?: number;
  image: StaticImageData;
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
};

// Schema validation với Zod

const formSchema = z
  .object({
    selfDrivingPax: z.number().min(0, "Quantity cannot be negative"),
    localDriverPax: z.number().min(0, "Quantity cannot be negative"),
    fullName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^[+]?[0-9\s-()]+$/, "Invalid phone number"),
    email: z.string().email("Invalid email"),
    message: z.string().optional(),
    pickupLocation: z.string().min(1, "Please select pick up location"),
    departureDate: z.date({
      required_error: "Please select departure date",
    }),
    pickupAddress: z.string().min(5, " Address must be at least 5 characters"),
    dropOffLocation: z.string().min(1, " Please select a return location"),
    endDate: z.date({
      required_error: "Please select end date",
    }),
    dropOffAddress: z.string().min(1, " Please select a return address"),
  })
  .refine(
    (data) => {
      return data.selfDrivingPax > 0 || data.localDriverPax > 0;
    },
    {
      message: " Please select at least 1 person for the tour",
      path: ["selfDrivingPax"],
    }
  )
  .refine(
    (data) => {
      return data.endDate > data.departureDate;
    },
    {
      message: "Ngày kết thúc phải sau ngày khởi hành",
      path: ["endDate"],
    }
  );

type FormData = z.infer<typeof formSchema>;

const FormContact = ({ items }: ListComponentProps) => {
  const [selfDrivingPax, setSelfDrivingPax] = useState(0);
  const [localDriverPax, setLocalDriverPax] = useState(0);
  const selfDrivingPrice = items.newPrice ?? 0;
  const localDriverPrice = items.oldPrice ?? 0;

  const total =
    selfDrivingPax * selfDrivingPrice + localDriverPax * localDriverPrice;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selfDrivingPax: 0,
      localDriverPax: 0,
      fullName: "",
      phone: "",
      email: "",
      message: "",
      pickupLocation: "",
      pickupAddress: "",
      dropOffLocation: "",
      dropOffAddress: "",
      departureDate: undefined,
      endDate: undefined,
    },
  });

  const incrementPax = (type: "self" | "local") => {
    if (type === "self") {
      const newValue = selfDrivingPax + 1;
      setSelfDrivingPax(newValue);
      form.setValue("selfDrivingPax", newValue);
      form.trigger("selfDrivingPax");
    } else {
      const newValue = localDriverPax + 1;
      setLocalDriverPax(newValue);
      form.setValue("localDriverPax", newValue);
      form.trigger("localDriverPax");
    }
    form.clearErrors("selfDrivingPax");
  };

  const decrementPax = (type: "self" | "local") => {
    if (type === "self") {
      const newValue = Math.max(0, selfDrivingPax - 1);
      setSelfDrivingPax(newValue);
      form.setValue("selfDrivingPax", newValue);
      form.trigger("selfDrivingPax");
    } else {
      const newValue = Math.max(0, localDriverPax - 1);
      setLocalDriverPax(newValue);
      form.setValue("localDriverPax", newValue);
      form.trigger("localDriverPax");
    }
  };

  const handleDepartureDateChange = (date: Date | undefined) => {
    if (date) {
      form.setValue("departureDate", date);
      const calculatedEndDate = new Date(date);
      calculatedEndDate.setDate(calculatedEndDate.getDate() + 3);
      form.setValue("endDate", calculatedEndDate);
      form.clearErrors(["departureDate", "endDate"]);
    }
  };
  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Form đã được gửi thành công! Kiểm tra console để xem dữ liệu.");
  };

  const onError = (errors: unknown) => {
    console.log("Form errors:", errors);
  };

  return (
    <div>
      <Card className={`${styles.container}`}>
        <div className={`${styles.HeaderForm}`}>
          <p className={`${styles.titleHeader}`}>Type of tour: </p>
          <p className={`${styles.name}`}>{items.name}</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onError)} className="w-full h-full">
            <div className={`${styles.BodyForm}`}>
              <div className={`${styles.containerPrice}`}>
                <div className={`${styles.priceItem}`}>
                  <span className={`${styles.titlePrice}`}>
                    4 days of self-driving
                  </span>
                  <div className={`${styles.priceWrap}`}>
                    <span className={`${styles.priceText}`}>
                      $ {selfDrivingPrice}
                    </span>
                    <div className={`${styles.btnContainer}`}>
                      <span className={`${styles.pax}`}>Pax</span>
                      <span className={`${styles.number}`}>
                        {selfDrivingPax}
                      </span>
                      <div className={` flex flex-col ${styles.btnWrap}`}>
                        <Button
                          type="button"
                          className={`${styles.btnIcon}`}
                          variant="ghost"
                          onClick={() => incrementPax("self")}
                        >
                          <ChevronUp />
                        </Button>
                        <Button
                          type="button"
                          className={`${styles.btnIcon}`}
                          variant="ghost"
                          onClick={() => decrementPax("self")}
                        >
                          <ChevronDown />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {selfDrivingPax === 0 && (
                  <p className="text-sm text-red-500 text-right">
                    Please select the number of people
                  </p>
                )}
                <div className={`${styles.priceItem}`}>
                  <span className={`${styles.titlePrice}`}>
                    4 days of self-driving
                  </span>
                  <div className={`${styles.priceWrap}`}>
                    <span className={`${styles.priceText}`}>
                      $ {localDriverPrice}
                    </span>
                    <div className={`${styles.btnContainer}`}>
                      <span className={`${styles.pax}`}>Pax</span>
                      <span className={`${styles.number}`}>
                        {localDriverPax}
                      </span>
                      <div className={` flex flex-col ${styles.btnWrap}`}>
                        <Button
                          type="button"
                          className={`${styles.btnIcon}`}
                          variant="ghost"
                          onClick={() => incrementPax("local")}
                        >
                          <ChevronUp />
                        </Button>
                        <Button
                          type="button"
                          className={`${styles.btnIcon}`}
                          variant="ghost"
                          onClick={() => decrementPax("local")}
                        >
                          <ChevronDown />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {localDriverPax === 0 && (
                  <p className="text-sm text-red-500 text-right">
                    Please select the number of people
                  </p>
                )}

                {/* Error message for passenger selection */}
                {form.formState.errors.selfDrivingPax && (
                  <p className="text-sm text-red-500 text-right">
                    {form.formState.errors.selfDrivingPax.message}
                  </p>
                )}
              </div>

              {/* Total */}
              <div className={`${styles.totalContainer}`}>
                <span className={`${styles.titleTotal}`}>TOTAL</span>
                <span className={`${styles.total}`}>${total}</span>
              </div>

              {/* Customer Information */}
              <div className={`${styles.customInfo}`}>
                <h3 className={`${styles.titleCustomInfo}`}>
                  Customer Information:
                </h3>
                <div className={`${styles.containerInfo}`}>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            placeholder="Name *"
                            {...field}
                            className={`${styles.inputName}`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className={`${styles.contactContainer}`}>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="(Whatsapp) +84 *"
                              {...field}
                              className={`${styles.inputPhone}`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Email *"
                              type="email"
                              {...field}
                              className={`${styles.inputEmail}`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            {...field}
                            className={`${styles.TextareaMessage}`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Booking */}
            <div className={`${styles.containerBooking}`}>
              <div className={`${styles.itemBooking}`}>
                <FormField
                  control={form.control}
                  name="pickupLocation"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className={`${styles.labelBook}`}>
                        Pick up
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={`${styles.selectText}`}>
                            <SelectValue placeholder="Pick up" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hanoi">Hanoi</SelectItem>
                          <SelectItem value="hagiang">Ha Giang</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className={`${styles.itemDate}`}>
                <FormField
                  control={form.control}
                  name="departureDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className={`${styles.labelBook}`}>
                        Departure date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                `${styles.calendarItem}`,
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon
                                className={`${styles.calendarIcon}`}
                              />
                              {field.value
                                ? format(field.value, "PPP")
                                : "Pick a date"}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={handleDepartureDateChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className={`${styles.Address}`}>
                <FormField
                  control={form.control}
                  name="pickupAddress"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className={`${styles.labelBook}`}>
                        Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="pick up Address *"
                          {...field}
                          className={`${styles.inputAddress}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className={`${styles.containerBooking}`}>
              <div className={`${styles.itemBooking}`}>
                <FormField
                  control={form.control}
                  name="dropOffLocation"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className={`${styles.labelBook}`}>
                        Drop off
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={`${styles.selectText}`}>
                            <SelectValue placeholder="Drop off" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hanoi">Hanoi</SelectItem>
                          <SelectItem value="hagiang">Ha Giang</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className={`${styles.itemDate}`}>
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className={`${styles.labelBook}`}>
                        End date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                `${styles.calendarItem}`,
                                !field.value && "text-muted-foreground"
                              )}
                              disabled={!form.watch("departureDate")}
                            >
                              <CalendarIcon
                                className={`${styles.calendarIcon}`}
                              />
                              {field.value
                                ? format(field.value, "PPP")
                                : "Auto calculated"}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => {
                              const departureDate = form.watch("departureDate");
                              if (!departureDate) return true;
                              return date < departureDate;
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className={`${styles.itemBooking}`}>
                <FormField
                  control={form.control}
                  name="dropOffAddress"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className={`${styles.labelBook}`}>
                        Address
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={`${styles.selectText}`}>
                            <SelectValue placeholder="Please Select Draft" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="draft1">Draft 1</SelectItem>
                          <SelectItem value="draft2">Draft 2</SelectItem>
                          <SelectItem value="custom">Custom Address</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {/* payment */}
            <div className={`${styles.PaymentContainer}`}>
              <div className={`${styles.btnPaymentContainer}`}>
                <Button
                  type="submit"
                  variant="outline"
                  className={`${styles.btnPayLeft}`}
                >
                  PAY NOW
                </Button>
                <Button type="submit" className={`${styles.btnPayRight}`}>
                  BOOK & PAY LATER
                </Button>
              </div>
              <div className={`${styles.imagesPayment}`}>
                <Image
                  className={`${styles.imgPayment}`}
                  src={assets.visa}
                  alt=""
                />
                <Image
                  className={`${styles.imgPayment}`}
                  src={assets.paymentCard}
                  alt=""
                />
              </div>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default FormContact;
