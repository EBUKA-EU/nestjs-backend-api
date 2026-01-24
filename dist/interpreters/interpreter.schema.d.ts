import { Document } from 'mongoose';
export declare class Language {
    native: string;
    target: string;
}
export declare const LanguageSchema: import("mongoose").Schema<Language, import("mongoose").Model<Language, any, any, any, (Document<unknown, any, Language, any, import("mongoose").DefaultSchemaOptions> & Language & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Language, any, import("mongoose").DefaultSchemaOptions> & Language & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Language>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Language, Document<unknown, {}, Language, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Language & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    native?: import("mongoose").SchemaDefinitionProperty<string, Language, Document<unknown, {}, Language, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Language & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    target?: import("mongoose").SchemaDefinitionProperty<string, Language, Document<unknown, {}, Language, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Language & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Language>;
export declare class Address {
    country: string;
    city: string;
    province: string;
    postal_code: string;
}
export declare const AddressSchema: import("mongoose").Schema<Address, import("mongoose").Model<Address, any, any, any, (Document<unknown, any, Address, any, import("mongoose").DefaultSchemaOptions> & Address & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Address, any, import("mongoose").DefaultSchemaOptions> & Address & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Address>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Address, Document<unknown, {}, Address, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Address & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    country?: import("mongoose").SchemaDefinitionProperty<string, Address, Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Address & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    city?: import("mongoose").SchemaDefinitionProperty<string, Address, Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Address & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    province?: import("mongoose").SchemaDefinitionProperty<string, Address, Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Address & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    postal_code?: import("mongoose").SchemaDefinitionProperty<string, Address, Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Address & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Address>;
export declare class Badge {
    badge_name: string;
    date_attained: string;
}
export declare const BadgeSchema: import("mongoose").Schema<Badge, import("mongoose").Model<Badge, any, any, any, (Document<unknown, any, Badge, any, import("mongoose").DefaultSchemaOptions> & Badge & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Badge, any, import("mongoose").DefaultSchemaOptions> & Badge & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Badge>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Badge, Document<unknown, {}, Badge, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Badge & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    badge_name?: import("mongoose").SchemaDefinitionProperty<string, Badge, Document<unknown, {}, Badge, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Badge & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date_attained?: import("mongoose").SchemaDefinitionProperty<string, Badge, Document<unknown, {}, Badge, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Badge & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Badge>;
export declare class Performance {
    professionalism: number;
    accuracy: number;
}
export declare const PerformanceSchema: import("mongoose").Schema<Performance, import("mongoose").Model<Performance, any, any, any, (Document<unknown, any, Performance, any, import("mongoose").DefaultSchemaOptions> & Performance & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Performance, any, import("mongoose").DefaultSchemaOptions> & Performance & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Performance>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Performance, Document<unknown, {}, Performance, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Performance & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    professionalism?: import("mongoose").SchemaDefinitionProperty<number, Performance, Document<unknown, {}, Performance, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Performance & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    accuracy?: import("mongoose").SchemaDefinitionProperty<number, Performance, Document<unknown, {}, Performance, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Performance & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Performance>;
export declare class Call {
    call_id: string;
    call_date: string;
    client_id: string;
    start_time: string;
    mins: number;
    rate_per_min: number;
    status: string;
    billable: boolean;
    dropped: string;
    interpreter_comments: string;
    client_feedback: string;
    call_rating: number;
    service_type: string;
}
export declare const CallSchema: import("mongoose").Schema<Call, import("mongoose").Model<Call, any, any, any, (Document<unknown, any, Call, any, import("mongoose").DefaultSchemaOptions> & Call & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Call, any, import("mongoose").DefaultSchemaOptions> & Call & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Call>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Call, Document<unknown, {}, Call, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    call_id?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    call_date?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    client_id?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    start_time?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mins?: import("mongoose").SchemaDefinitionProperty<number, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rate_per_min?: import("mongoose").SchemaDefinitionProperty<number, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    billable?: import("mongoose").SchemaDefinitionProperty<boolean, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dropped?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    interpreter_comments?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    client_feedback?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    call_rating?: import("mongoose").SchemaDefinitionProperty<number, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    service_type?: import("mongoose").SchemaDefinitionProperty<string, Call, Document<unknown, {}, Call, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Call & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Call>;
export declare class Interpreter extends Document {
    interpreter_id: string;
    name: string;
    is_active: boolean;
    languages: Language[];
    date_joined: string;
    address: Address;
    type: string;
    badges: Badge[];
    performance: Performance;
    calls: Call[];
}
export declare const InterpreterSchema: import("mongoose").Schema<Interpreter, import("mongoose").Model<Interpreter, any, any, any, (Document<unknown, any, Interpreter, any, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Interpreter, any, import("mongoose").DefaultSchemaOptions> & Interpreter & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}), any, Interpreter>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Interpreter, Document<unknown, {}, Interpreter, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    interpreter_id?: import("mongoose").SchemaDefinitionProperty<string, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    languages?: import("mongoose").SchemaDefinitionProperty<Language[], Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date_joined?: import("mongoose").SchemaDefinitionProperty<string, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: import("mongoose").SchemaDefinitionProperty<Address, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    badges?: import("mongoose").SchemaDefinitionProperty<Badge[], Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    performance?: import("mongoose").SchemaDefinitionProperty<Performance, Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    calls?: import("mongoose").SchemaDefinitionProperty<Call[], Interpreter, Document<unknown, {}, Interpreter, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Interpreter & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Interpreter>;
