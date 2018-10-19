import * as sinon from 'sinon';

export function createStub<T>(klass: { new(...args: any[]): T; }): T {
    const mock = sinon.createStubInstance(klass);
    const className = klass.toString();

    mock._mockClassName = className.slice(
        className.indexOf('function ') + 9,
        className.indexOf('(')
    ) + '@' + Math.ceil((Math.random() * 1000000));

    return <T> (<any> mock);
}
