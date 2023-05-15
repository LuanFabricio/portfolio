import React from "react";

type DescriptionProps = {
  /**
   * Text with description of user.
   * */
  description: string;
};

/**
 * Component for show user's description.
 * @prop {string} description - Text with description of user.
 * @returns {JSX.Element}
 * */
export default function Description({
  description,
}: DescriptionProps): JSX.Element {
  return <div className="rounded max-w-sm bg-gray-200 p-6">{description}</div>;
}
