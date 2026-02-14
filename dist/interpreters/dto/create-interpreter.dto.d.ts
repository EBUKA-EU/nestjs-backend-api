declare class LanguageDto {
    native: string;
    target: string;
}
declare class AddressDto {
    country: string;
    city: string;
    province: string;
    postal_code: string;
}
export declare class BadgeDto {
    badge_name: string;
    date_attained: string;
}
declare class PerformanceDto {
    professionalism: number;
    accuracy: number;
}
export declare class CallDto {
    call_id?: string;
    call_date?: string;
    client_id: string;
    start_time: string;
    mins: number;
    rate_per_min: number;
    pay: number;
    status: string;
    billable: string;
    dropped: string;
    interpreter_comments?: string;
    client_feedback?: string;
    call_rating_by_client?: number;
    service_type: string;
}
export declare class CreateInterpreterDto {
    interpreter_id?: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    date_joined: string;
    address: AddressDto;
    type: string;
    languages: LanguageDto[];
    badges: BadgeDto[];
    performance: PerformanceDto;
    calls: CallDto[];
}
export {};
