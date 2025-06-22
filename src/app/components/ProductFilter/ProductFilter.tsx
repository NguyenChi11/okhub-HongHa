"use client";

import React, { useMemo, useState } from "react";
import styles from "./custom.module.css";
import { product_data, filterOptions } from "@/app/public/assets/data/product";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCardPrimary from "../ProductCardPrimary/ProductCardPrimary";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";


const ITEMS_PER_PAGE = 9;
const ProductFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "all-tour",
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredTours = useMemo(() => {
    if (selectedFilters.includes("all-tour")) {
      return product_data;
    }
    return product_data.filter((tour) =>
      selectedFilters.includes(tour.category)
    );
  }, [selectedFilters]);

  const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTours = filteredTours.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleFilterChange = (filterId: string) => {
    if (filterId === "all-tour") {
      setSelectedFilters(["all-tour"]);
    } else {
      const newFilters = selectedFilters.filter((f) => f !== "all-tour");
      if (selectedFilters.includes(filterId)) {
        const updated = newFilters.filter((f) => f !== filterId);
        setSelectedFilters(updated.length === 0 ? ["all-tour"] : updated);
      } else {
        setSelectedFilters([...newFilters, filterId]);
      }
    }
    setCurrentPage(1);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.optionContainer}`}>
        <h3 className={`${styles.optionTitle}`}>TYPE OF TOUR</h3>
        <hr className={`${styles.hr}`} />
        <div className={`${styles.optionWrap}`}>
          {filterOptions.map((option, index) => (
            <div className={`${styles.optionCheckbox}`} key={index}>
              <Checkbox
                id={option.id}
                checked={selectedFilters.includes(option.id)}
                onCheckedChange={() => handleFilterChange(option.id)}
                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
              />
              <label className={`${styles.optionLabel}`} htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.optionContainerMobile}`}>
        <div className={`${styles.optionMobileWrap}`}>
          <h6 className={`${styles.optionMobileTitle}`}>
            <span>{filteredTours.length}</span> TOUR
          </h6>
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className={`${styles.optionMenu}`}
          >
            <div className={`${styles.optionIconMenu}`}>
              <FontAwesomeIcon icon={faSquareCaretDown} />
            </div>
            <h3 className={`${styles.optionTitleMenu}`}>TYPE OF TOUR</h3>
          </button>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ml-4 mr-4 ${
            isMobileFilterOpen ? "max-h-96 mb-4" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm tracking-wide">
                TYPE OF TOUR
              </h3>
              <div className="space-y-3">
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={`mobile-${option.id}`}
                      checked={selectedFilters.includes(option.id)}
                      onCheckedChange={() => handleFilterChange(option.id)}
                      className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                    />
                    <label
                      htmlFor={`mobile-${option.id}`}
                      className={`text-sm font-medium cursor-pointer ${
                        selectedFilters.includes(option.id)
                          ? option.color
                          : "text-gray-600"
                      }`}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.productContainer}`}>
        {currentTours.map((item, index) => (
          <div className={`${styles.productItem}`} key={index}>
            <ProductCardPrimary item={item} />
          </div>
        ))}
        <div className={`${styles.pagination}`}>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-white text-gray-600"
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "bg-white text-gray"
                    }
                  >
                    {page}
                  </Button>
                )
              )}

              <Button
                variant="outline"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="bg-white text-gray-600"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
