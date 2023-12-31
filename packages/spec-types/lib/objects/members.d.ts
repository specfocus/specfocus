export type RequiredMembers<T extends {}> = {
    [K in keyof T]-?: undefined extends T[K] ? never : K;
}[keyof T];
//# sourceMappingURL=members.d.ts.map