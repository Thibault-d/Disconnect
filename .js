IncomingMessage {
    _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList {
            head: null,
            tail: null,
            length: 0
        },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: null,
        ended: true,
        endEmitted: false,
        reading: false,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        paused: true,
        emitClose: true,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: true,
        decoder: null,
        encoding: null
    },
    readable: true,
    _events: [Object: null prototype] {
        end: [Function: resetHeadersTimeoutOnReqEnd]
    },
    _eventsCount: 1,
    _maxListeners: undefined,
    socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: ReadableState {
            objectMode: false,
            highWaterMark: 16384,
            buffer: BufferList {
                head: null,
                tail: null,
                length: 0
            },
            length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            paused: false,
            emitClose: false,
            autoDestroy: false,
            destroyed: false,
            defaultEncoding: 'utf8',
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null
        },
        readable: true,
        _events: [Object: null prototype] {
            end: [Array],
            timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
            error: [Array],
            close: [Array],
            drain: [Function: bound socketOnDrain],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause]
        },
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: WritableState {
            objectMode: false,
            highWaterMark: 16384,
            finalCalled: false,
            needDrain: false,
            ending: false,
            ended: false,
            finished: false,
            destroyed: false,
            decodeStrings: false,
            defaultEncoding: 'utf8',
            length: 0,
            writing: false,
            corked: 0,
            sync: true,
            bufferProcessing: false,
            onwrite: [Function: bound onwrite],
            writecb: null,
            writelen: 0,
            bufferedRequest: null,
            lastBufferedRequest: null,
            pendingcb: 0,
            prefinished: false,
            errorEmitted: false,
            emitClose: false,
            autoDestroy: false,
            bufferedRequestCount: 0,
            corkedRequestsFree: [Object]
        },
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: Server {
            _events: [Object: null prototype],
            _eventsCount: 4,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            keepAliveTimeout: 5000,
            maxHeadersCount: null,
            headersTimeout: 40000,
            _connectionKey: '6::::3000',
            [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 11
        },
        _server: Server {
            _events: [Object: null prototype],
            _eventsCount: 4,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            keepAliveTimeout: 5000,
            maxHeadersCount: null,
            headersTimeout: 40000,
            _connectionKey: '6::::3000',
            [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 11
        },
        timeout: 120000,
        parser: HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
            _headers: [],
            _url: '',
            socket: [Circular],
            incoming: [Circular],
            outgoing: null,
            maxHeaderPairs: 2000,
            _consumed: true,
            onIncoming: [Function: bound parserOnIncoming],
            parsingHeadersStart: 0
        },
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: ServerResponse {
            _events: [Object: null prototype],
            _eventsCount: 2,
            _maxListeners: undefined,
            outputData: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedConnection: false,
            _removedContLen: false,
            _removedTE: false,
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            socket: [Circular],
            connection: [Circular],
            _header: null,
            _onPendingData: [Function: bound updateOutgoingData],
            _sent100: false,
            _expect_continue: false,
            req: [Circular],
            locals: [Object: null prototype] {},
            _startAt: undefined,
            _startTime: undefined,
            writeHead: [Function: writeHead],
            __onFinished: [Function],
            [Symbol(kNeedDrain)]: false,
            [Symbol(isCorked)]: false,
            [Symbol(kOutHeaders)]: [Object: null prototype]
        },
        _peername: {
            address: '::1',
            family: 'IPv6',
            port: 56069
        },
        [Symbol(asyncId)]: 34,
        [Symbol(kHandle)]: TCP {
            reading: true,
            onconnection: null,
            _consumed: true,
            [Symbol(owner)]: [Circular]
        },
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
            _idleTimeout: 120000,
            _idlePrev: [TimersList],
            _idleNext: [Timeout],
            _idleStart: 818,
            _onTimeout: [Function: bound],
            _timerArgs: undefined,
            _repeat: null,
            _destroyed: false,
            [Symbol(refed)]: false,
            [Symbol(asyncId)]: 35,
            [Symbol(triggerId)]: 34
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
    },
    connection: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: ReadableState {
            objectMode: false,
            highWaterMark: 16384,
            buffer: BufferList {
                head: null,
                tail: null,
                length: 0
            },
            length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            paused: false,
            emitClose: false,
            autoDestroy: false,
            destroyed: false,
            defaultEncoding: 'utf8',
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null
        },
        readable: true,
        _events: [Object: null prototype] {
            end: [Array],
            timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
            error: [Array],
            close: [Array],
            drain: [Function: bound socketOnDrain],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause]
        },
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: WritableState {
            objectMode: false,
            highWaterMark: 16384,
            finalCalled: false,
            needDrain: false,
            ending: false,
            ended: false,
            finished: false,
            destroyed: false,
            decodeStrings: false,
            defaultEncoding: 'utf8',
            length: 0,
            writing: false,
            corked: 0,
            sync: true,
            bufferProcessing: false,
            onwrite: [Function: bound onwrite],
            writecb: null,
            writelen: 0,
            bufferedRequest: null,
            lastBufferedRequest: null,
            pendingcb: 0,
            prefinished: false,
            errorEmitted: false,
            emitClose: false,
            autoDestroy: false,
            bufferedRequestCount: 0,
            corkedRequestsFree: [Object]
        },
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: Server {
            _events: [Object: null prototype],
            _eventsCount: 4,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            keepAliveTimeout: 5000,
            maxHeadersCount: null,
            headersTimeout: 40000,
            _connectionKey: '6::::3000',
            [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 11
        },
        _server: Server {
            _events: [Object: null prototype],
            _eventsCount: 4,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            keepAliveTimeout: 5000,
            maxHeadersCount: null,
            headersTimeout: 40000,
            _connectionKey: '6::::3000',
            [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 11
        },
        timeout: 120000,
        parser: HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
            _headers: [],
            _url: '',
            socket: [Circular],
            incoming: [Circular],
            outgoing: null,
            maxHeaderPairs: 2000,
            _consumed: true,
            onIncoming: [Function: bound parserOnIncoming],
            parsingHeadersStart: 0
        },
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: ServerResponse {
            _events: [Object: null prototype],
            _eventsCount: 2,
            _maxListeners: undefined,
            outputData: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedConnection: false,
            _removedContLen: false,
            _removedTE: false,
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            socket: [Circular],
            connection: [Circular],
            _header: null,
            _onPendingData: [Function: bound updateOutgoingData],
            _sent100: false,
            _expect_continue: false,
            req: [Circular],
            locals: [Object: null prototype] {},
            _startAt: undefined,
            _startTime: undefined,
            writeHead: [Function: writeHead],
            __onFinished: [Function],
            [Symbol(kNeedDrain)]: false,
            [Symbol(isCorked)]: false,
            [Symbol(kOutHeaders)]: [Object: null prototype]
        },
        _peername: {
            address: '::1',
            family: 'IPv6',
            port: 56069
        },
        [Symbol(asyncId)]: 34,
        [Symbol(kHandle)]: TCP {
            reading: true,
            onconnection: null,
            _consumed: true,
            [Symbol(owner)]: [Circular]
        },
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
            _idleTimeout: 120000,
            _idlePrev: [TimersList],
            _idleNext: [Timeout],
            _idleStart: 818,
            _onTimeout: [Function: bound],
            _timerArgs: undefined,
            _repeat: null,
            _destroyed: false,
            [Symbol(refed)]: false,
            [Symbol(asyncId)]: 35,
            [Symbol(triggerId)]: 34
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        dnt: '1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
        'sec-fetch-dest': 'document',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        referer: 'http://localhost:3000/artists/search?search=Jonathan+wilson',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,es-ES;q=0.6,es;q=0.5',
        'if-none-match': 'W/"172-HtflV6xgcuGGU0ff+YOKgfcyAuA"'
    },
    rawHeaders: [
        'Host',
        'localhost:3000',
        'Connection',
        'keep-alive',
        'Cache-Control',
        'max-age=0',
        'DNT',
        '1',
        'Upgrade-Insecure-Requests',
        '1',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
        'Sec-Fetch-Dest',
        'document',
        'Accept',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site',
        'same-origin',
        'Sec-Fetch-Mode',
        'navigate',
        'Sec-Fetch-User',
        '?1',
        'Referer',
        'http://localhost:3000/artists/search?search=Jonathan+wilson',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,es-ES;q=0.6,es;q=0.5',
        'If-None-Match',
        'W/"172-HtflV6xgcuGGU0ff+YOKgfcyAuA"'
    ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '/details?2KVKRmZJ6LaivgFY2DHFXf',
    method: 'GET',
    statusCode: null,
    statusMessage: null,
    client: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: ReadableState {
            objectMode: false,
            highWaterMark: 16384,
            buffer: BufferList {
                head: null,
                tail: null,
                length: 0
            },
            length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            paused: false,
            emitClose: false,
            autoDestroy: false,
            destroyed: false,
            defaultEncoding: 'utf8',
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null
        },
        readable: true,
        _events: [Object: null prototype] {
            end: [Array],
            timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
            error: [Array],
            close: [Array],
            drain: [Function: bound socketOnDrain],
            resume: [Function: onSocketResume],
            pause: [Function: onSocketPause]
        },
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: WritableState {
            objectMode: false,
            highWaterMark: 16384,
            finalCalled: false,
            needDrain: false,
            ending: false,
            ended: false,
            finished: false,
            destroyed: false,
            decodeStrings: false,
            defaultEncoding: 'utf8',
            length: 0,
            writing: false,
            corked: 0,
            sync: true,
            bufferProcessing: false,
            onwrite: [Function: bound onwrite],
            writecb: null,
            writelen: 0,
            bufferedRequest: null,
            lastBufferedRequest: null,
            pendingcb: 0,
            prefinished: false,
            errorEmitted: false,
            emitClose: false,
            autoDestroy: false,
            bufferedRequestCount: 0,
            corkedRequestsFree: [Object]
        },
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: Server {
            _events: [Object: null prototype],
            _eventsCount: 4,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            keepAliveTimeout: 5000,
            maxHeadersCount: null,
            headersTimeout: 40000,
            _connectionKey: '6::::3000',
            [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 11
        },
        _server: Server {
            _events: [Object: null prototype],
            _eventsCount: 4,
            _maxListeners: undefined,
            _connections: 2,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            keepAliveTimeout: 5000,
            maxHeadersCount: null,
            headersTimeout: 40000,
            _connectionKey: '6::::3000',
            [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(asyncId)]: 11
        },
        timeout: 120000,
        parser: HTTPParser {
            '0': [Function: parserOnHeaders],
            '1': [Function: parserOnHeadersComplete],
            '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
            _headers: [],
            _url: '',
            socket: [Circular],
            incoming: [Circular],
            outgoing: null,
            maxHeaderPairs: 2000,
            _consumed: true,
            onIncoming: [Function: bound parserOnIncoming],
            parsingHeadersStart: 0
        },
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: ServerResponse {
            _events: [Object: null prototype],
            _eventsCount: 2,
            _maxListeners: undefined,
            outputData: [],
            outputSize: 0,
            writable: true,
            _last: false,
            chunkedEncoding: false,
            shouldKeepAlive: true,
            useChunkedEncodingByDefault: true,
            sendDate: true,
            _removedConnection: false,
            _removedContLen: false,
            _removedTE: false,
            _contentLength: null,
            _hasBody: true,
            _trailer: '',
            finished: false,
            _headerSent: false,
            socket: [Circular],
            connection: [Circular],
            _header: null,
            _onPendingData: [Function: bound updateOutgoingData],
            _sent100: false,
            _expect_continue: false,
            req: [Circular],
            locals: [Object: null prototype] {},
            _startAt: undefined,
            _startTime: undefined,
            writeHead: [Function: writeHead],
            __onFinished: [Function],
            [Symbol(kNeedDrain)]: false,
            [Symbol(isCorked)]: false,
            [Symbol(kOutHeaders)]: [Object: null prototype]
        },
        _peername: {
            address: '::1',
            family: 'IPv6',
            port: 56069
        },
        [Symbol(asyncId)]: 34,
        [Symbol(kHandle)]: TCP {
            reading: true,
            onconnection: null,
            _consumed: true,
            [Symbol(owner)]: [Circular]
        },
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
            _idleTimeout: 120000,
            _idlePrev: [TimersList],
            _idleNext: [Timeout],
            _idleStart: 818,
            _onTimeout: [Function: bound],
            _timerArgs: undefined,
            _repeat: null,
            _destroyed: false,
            [Symbol(refed)]: false,
            [Symbol(asyncId)]: 35,
            [Symbol(triggerId)]: 34
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
    },
    _consuming: false,
    _dumped: false,
    next: [Function: next],
    baseUrl: '/artists',
    originalUrl: '/artists/details?2KVKRmZJ6LaivgFY2DHFXf',
    _parsedUrl: Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?2KVKRmZJ6LaivgFY2DHFXf',
        query: '2KVKRmZJ6LaivgFY2DHFXf',
        pathname: '/details',
        path: '/details?2KVKRmZJ6LaivgFY2DHFXf',
        href: '/details?2KVKRmZJ6LaivgFY2DHFXf',
        _raw: '/details?2KVKRmZJ6LaivgFY2DHFXf'
    },
    params: {},
    query: {
        '2KVKRmZJ6LaivgFY2DHFXf': ''
    },
    res: ServerResponse {
        _events: [Object: null prototype] {
            finish: [Array],
            end: [Function: onevent]
        },
        _eventsCount: 2,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState: [ReadableState],
            readable: true,
            _events: [Object: null prototype],
            _eventsCount: 8,
            _maxListeners: undefined,
            _writableState: [WritableState],
            writable: true,
            allowHalfOpen: true,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: [Server],
            _server: [Server],
            timeout: 120000,
            parser: [HTTPParser],
            on: [Function: socketListenerWrap],
            addListener: [Function: socketListenerWrap],
            prependListener: [Function: socketListenerWrap],
            _paused: false,
            _httpMessage: [Circular],
            _peername: [Object],
            [Symbol(asyncId)]: 34,
            [Symbol(kHandle)]: [TCP],
            [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]: Timeout {
                _idleTimeout: 120000,
                _idlePrev: [TimersList],
                _idleNext: [Timeout],
                _idleStart: 818,
                _onTimeout: [Function: bound],
                _timerArgs: undefined,
                _repeat: null,
                _destroyed: false,
                [Symbol(refed)]: false,
                [Symbol(asyncId)]: 35,
                [Symbol(triggerId)]: 34
            },
            [Symbol(kBuffer)]: null,
            [Symbol(kBufferCb)]: null,
            [Symbol(kBufferGen)]: null,
            [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0
        },
        connection: Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState: [ReadableState],
            readable: true,
            _events: [Object: null prototype],
            _eventsCount: 8,
            _maxListeners: undefined,
            _writableState: [WritableState],
            writable: true,
            allowHalfOpen: true,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: [Server],
            _server: [Server],
            timeout: 120000,
            parser: [HTTPParser],
            on: [Function: socketListenerWrap],
            addListener: [Function: socketListenerWrap],
            prependListener: [Function: socketListenerWrap],
            _paused: false,
            _httpMessage: [Circular],
            _peername: [Object],
            [Symbol(asyncId)]: 34,
            [Symbol(kHandle)]: [TCP],
            [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]: Timeout {
                _idleTimeout: 120000,
                _idlePrev: [TimersList],
                _idleNext: [Timeout],
                _idleStart: 818,
                _onTimeout: [Function: bound],
                _timerArgs: undefined,
                _repeat: null,
                _destroyed: false,
                [Symbol(refed)]: false,
                [Symbol(asyncId)]: 35,
                [Symbol(triggerId)]: 34
            },
            [Symbol(kBuffer)]: null,
            [Symbol(kBufferCb)]: null,
            [Symbol(kBufferGen)]: null,
            [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0
        },
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: [Object: null prototype] {},
        _startAt: undefined,
        _startTime: undefined,
        writeHead: [Function: writeHead],
        __onFinished: [Function: listener] {
            queue: [Array]
        },
        [Symbol(kNeedDrain)]: false,
        [Symbol(isCorked)]: false,
        [Symbol(kOutHeaders)]: [Object: null prototype] {
            'x-powered-by': [Array]
        }
    },
    _startAt: [54084, 901741099],
    _startTime: 2020 - 03 - 14 T13: 36: 56.439 Z,
    _remoteAddress: '::1',
    body: {},
    secret: undefined,
    cookies: [Object: null prototype] {},
    signedCookies: [Object: null prototype] {},
    _parsedOriginalUrl: Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?2KVKRmZJ6LaivgFY2DHFXf',
        query: '2KVKRmZJ6LaivgFY2DHFXf',
        pathname: '/artists/details',
        path: '/artists/details?2KVKRmZJ6LaivgFY2DHFXf',
        href: '/artists/details?2KVKRmZJ6LaivgFY2DHFXf',
        _raw: '/artists/details?2KVKRmZJ6LaivgFY2DHFXf'
    },
    route: Route {
        path: '/details',
        stack: [
            [Layer]
        ],
        methods: {
            get: true
        }
    }
}