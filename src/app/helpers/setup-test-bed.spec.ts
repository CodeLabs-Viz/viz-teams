import {TestBed, TestModuleMetadata} from '@angular/core/testing';

const resetTestingModule = TestBed.resetTestingModule;
const preventAngularFromResetting = () => TestBed.resetTestingModule = () => TestBed;
const allowAngularToReset = () => TestBed.resetTestingModule = resetTestingModule;

export const setupTestBed = (moduleDef: TestModuleMetadata) => {
    beforeAll(done => (async () => {
        resetTestingModule();
        preventAngularFromResetting();
        TestBed.configureTestingModule(moduleDef);
        await TestBed.compileComponents();

        // prevent Angular from resetting testing module
        TestBed.resetTestingModule = () => TestBed;
    })().then(done).catch(done.fail));

    afterAll(() => {
        allowAngularToReset();
    });
};
