import { Icon, IconButton } from "@chakra-ui/react";
import PostButtonIcon from "../icons/PostButtonIcon";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PostButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    const from = location.state?.from?.pathname || "/petweet";
    navigate(from, { replace: true });
  };

  return (
    <IconButton
      alignSelf="end"
      display="block"
      border="none"
      background="transparent"
      icon={<Icon as={PostButtonIcon} />}
      onClick={handleClick}
    ></IconButton>
  );
}
