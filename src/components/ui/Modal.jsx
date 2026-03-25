import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Icon from "@/components/ui/Icon";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  overlayClass = "",
  modalClass = "",
  closeButton = true,
  footer = null,
  disableEscapeClose = false,
  closeOnOverlayClick = true,
  centered = false,
}) => {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
  };

  return (
    <div className="font-dm-sans">
      {/* Local scrollbar hiding styles */}
      <style>{`
        .modal-scroll {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE & Edge */
        }
        .modal-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={disableEscapeClose ? () => {} : onClose}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`fixed inset-0 bg-gray-900/70 ${overlayClass}`}
              onClick={closeOnOverlayClick ? onClose : null}
            />
          </Transition.Child>

          {/* Scrollable overlay container (scrollbar hidden) */}
          <div
            className={`fixed inset-0 flex ${
              centered ? "items-center" : "items-start py-15"
            } justify-center px-4 overflow-y-auto modal-scroll`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`relative bg-white rounded-lg shadow-xl overflow-hidden w-full ${sizeClasses[size]} ${modalClass}`}
              >
                {(title || closeButton) && (
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
                    {title ? (
                      <Dialog.Title className="font-dm-sans text-lg font-medium text-gray-900">
                        {title}
                      </Dialog.Title>
                    ) : (
                      <div />
                    )}

                    {closeButton && (
                      <button
                        onClick={onClose}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        aria-label="Close"
                        type="button"
                      >
                        <Icon icon="mdi:close" width={22} className="text-gray-800" />
                      </button>
                    )}
                  </div>
                )}

                <div className="px-6 py-4 font-dm-sans text-gray-800">
                  {children}
                </div>

                {footer && (
                  <div className="px-6 py-4 border-t border-gray-300 font-dm-sans text-gray-800">
                    {footer}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
