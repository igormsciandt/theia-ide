/********************************************************************************
 * Copyright (C) 2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { WindowService } from '@theia/core/lib/browser/window/window-service';
import * as React from 'react';

export interface ExternalBrowserLinkProps {
    text: string;
    url: string;
    windowService: WindowService;
}

function BrowserLink(props: ExternalBrowserLinkProps): JSX.Element {
    return <a
        role={'button'}
        tabIndex={0}
        href={props.url}
        target='_blank'
        >
        {props.text}
    </a>;
}

export function renderWhatIs(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            What is this?
        </h3>
        <div>
            The FlowCode is a modern and open Text Editor for cloud and desktop. The FlowCode is based on the <BrowserLink text="Theia platform"
            url="https://theia-ide.org" windowService={windowService} ></BrowserLink>.
        </div>
    </div>;
}

export function renderExtendingCustomizing(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Creating Custom Extensions
        </h3>
        <div >
            You can extend the FlowCode by installing VS Code extensions, e.g. from the <BrowserLink text="OpenVSX registry" url="https://open-vsx.org/"
            windowService={windowService} ></BrowserLink>, an open marketplace for VS Code extensions. Just open the extension view or browse <BrowserLink
            text="OpenVSX online" url="https://open-vsx.org/" windowService={windowService} ></BrowserLink>.
        </div>
        <div>
            Furthermore, the FlowCode is based on the flexible Theia platform. Therefore, the FlowCode can serve as a <span className='gs-text-bold'>template</span> for building
            custom tools and IDEs. Browse <BrowserLink text="the documentation" url="https://theia-ide.org/docs/composing_applications/"
            windowService={windowService} ></BrowserLink>.
        </div>
    </div>;
}

export function renderSupport(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Professional Support
        </h3>
        <div>
            Professional support, implementation services, or any help with implementation contact: <BrowserLink text=" Theia support page" url="italocf@ciandt.com"
            windowService={windowService} ></BrowserLink>.
        </div>
    </div>;
}
