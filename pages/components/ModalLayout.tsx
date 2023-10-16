import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import type { DialogTitleProps } from "@mui/material";
import type { FC, ReactNode } from "react";
import { FlexSpaceBetween } from "./FlexBox";

type ModalLayoutProps = {
  title?: string | ReactNode;
  footerLeft?: ReactNode;
  footerRight?: ReactNode;
  children: ReactNode;
  configs?: ModalConfigs | undefined;
} & CloseActionProps;

type CloseActionProps = {
  disabledCloseButton?: boolean;
  onClose: () => void;
};

export type ModalConfigs = {
  contentHeight?: string;
  hideFooter?: boolean;
};

type ModalHeaderProps = CloseActionProps & DialogTitleProps;

const padding = "16px 24px";
export const ModalLayout: FC<ModalLayoutProps> = ({
  title = "",
  onClose,
  footerLeft,
  footerRight,
  children,
  configs = {},
}) => {
  const { contentHeight = "max-content", hideFooter = false } = configs;
  return (
    <Dialog open fullWidth maxWidth="xl">
      <ModalHeader
        onClose={onClose}
        sx={{
          variant: "h5",
          fontWeight: 700,
          width: "100%",
          height: "4rem",
          padding: "8px",
          paddingLeft: "24px",
        }}
      >
        {title}
      </ModalHeader>
      <DialogContent sx={{ padding, height: contentHeight }}>
        <Stack spacing={1}>{children}</Stack>
      </DialogContent>
      {hideFooter ? null : (
        <DialogActions sx={{ padding }}>
          <FlexSpaceBetween sx={{ width: "100%", flexWrap: "wrap" }}>
            <FlexSpaceBetween>{footerLeft}</FlexSpaceBetween>
            <FlexSpaceBetween>{footerRight}</FlexSpaceBetween>
          </FlexSpaceBetween>
        </DialogActions>
      )}
    </Dialog>
  );
};

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  onClose,
  disabledCloseButton = false,
  ...props
}) => {
  return (
    <DialogTitle {...props}>
      <FlexSpaceBetween
        sx={{
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box>{children}</Box>
        <IconButton
          sx={{ zIndex: 9999 }}
          aria-label="close"
          onClick={onClose}
          disabled={disabledCloseButton}
        >
          <CloseIcon />
        </IconButton>
      </FlexSpaceBetween>
    </DialogTitle>
  );
};
