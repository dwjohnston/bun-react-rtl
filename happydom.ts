import { GlobalRegistrator } from '@happy-dom/global-registrator';
import {cleanup} from '@testing-library/react'
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect,afterEach } from "bun:test";

GlobalRegistrator.register();


// Extend the expect object with custom matchers
expect.extend({...matchers});

afterEach(() => {
  cleanup()
})