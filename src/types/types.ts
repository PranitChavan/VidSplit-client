import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { MouseEventHandler } from 'react';

export type OptionsProps = {
  splitOptions: Map<number, number> | undefined;
  videoDuration: number;
};

export type PopoverProps = {
  message: string;
  icon: LucideIcon;
  size: number;
  className: string;
};

export type ContainerProps = {
  children: ReactNode;
};

export type SplitRequestParms = {
  videoUrl: string;
  chunkDuration: string;
  sessionId: string;
};

type MutationProcessState = 'error' | 'idle' | 'pending' | 'success';

export type RenderButtonTextProps = {
  uploadingVideoStatus: MutationProcessState;
  videoSplittingStatus: MutationProcessState;
  chunksUrlsGetStatus: MutationProcessState;
};

export type VideoUploadCardPostUploadProps = {
  triggerVideoUploadSplitProcess: MouseEventHandler<HTMLButtonElement>;
  uploadingVideoStatus: MutationProcessState;
  videoSplittingStatus: MutationProcessState;
  chunksUrlsGetStatus: MutationProcessState;
  isTakingLongToUpload: boolean;
  videoDuration: number | undefined;
};
