export interface Plumbr {

  setAppName(appName: string): void;

  setServiceName(serviceName: string): void;

  setUserId(userId: string): void;

  startTransaction(serviceName?: string): void;

  regenerateUser(): void;

  sendError(e: Error | string): void;
}
