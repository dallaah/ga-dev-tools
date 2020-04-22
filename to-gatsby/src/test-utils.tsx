// Copyright 2020 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from "react"
import {
  createHistory,
  createMemorySource,
  LocationProvider,
  History,
} from "@reach/router"

export const withTestRouter = (
  component: JSX.Element,
  path: string = "/"
): {
  withRouter: JSX.Element
  history: History
} => {
  const history = createHistory(createMemorySource(path))
  const withRouter = (
    <LocationProvider history={history}>{component}</LocationProvider>
  )
  return { withRouter, history }
}