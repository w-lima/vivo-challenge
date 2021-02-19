
export default {
    BOT_POST_VALIDADE: { body: { name: { isRequired: true } } },
    MESSAGES_GET_PARAMS: { params: { id: { isRequired: true, isUUID: true } } },
    MESSAGES_GET_QUERY: { query: { conversationId: { isRequired: true, isUUID: true  } } }
};