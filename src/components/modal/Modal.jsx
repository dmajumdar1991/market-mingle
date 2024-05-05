import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="  rounded-lg text-center font-bold text-white">
        <button
          type="button"
          onClick={openModal}
          className="w-full  rounded-lg bg-violet-600  py-2 text-center font-bold text-white hover:bg-violet-800"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-50  p-2 text-left align-middle shadow-xl transition-all">
                  <section className="">
                    <div className="mx-auto flex flex-col items-center justify-center py-8  lg:py-0">
                      <div className="w-full  rounded-lg sm:max-w-md md:mt-0 xl:p-0 ">
                        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                          <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-gray-900"
                              >
                                Enter Full Name
                              </label>
                              <input
                                type="name"
                                name="name"
                                id="name"
                                className=" focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-gray-900 outline-0 sm:text-sm"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-900"
                              >
                                Enter Full Address
                              </label>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                className=" focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-gray-900 outline-0 sm:text-sm"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="pincode"
                                className="mb-2 block text-sm font-medium text-gray-900"
                              >
                                Enter Pincode
                              </label>
                              <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                className=" focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-gray-900 outline-0 sm:text-sm"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="mb-2 block text-sm font-medium text-gray-900"
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className=" focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-gray-900 outline-0 sm:text-sm"
                                required
                              />
                            </div>
                          </form>
                          <button
                            onClick={closeModal}
                            type="button"
                            className="w-full rounded-lg bg-violet-600 px-5 py-2.5  text-sm font-medium text-white outline-0 hover:bg-violet-800 focus:outline-none "
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
