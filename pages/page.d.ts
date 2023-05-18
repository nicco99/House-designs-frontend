import { NextPage } from 'next';
import { CompoundType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout: (_page: ReactElement) => ReactNode;
    layout?: CompoundType;
};