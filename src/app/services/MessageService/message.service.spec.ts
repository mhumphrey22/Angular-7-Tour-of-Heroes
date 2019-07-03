import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

const message = 'Test Message #1';

describe('MessageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('MessageService should be created', () => {
        const service: MessageService = TestBed.get(MessageService);

        expect(service).toBeTruthy();
    });

    it('Messages should be empty on initialization', () => {
        const service: MessageService = TestBed.get(MessageService);

        expect(service.messages).toEqual([]);
    });

    it('add() - Adding message "Test Message #1" should work', () => {
        const service: MessageService = TestBed.get(MessageService);

        service.add(message);

        expect(service.messages.length).toEqual(1);
        expect(service.messages[0]).toEqual(message);
    });

    it('clear() - Clearing messages should result in an empty array', () => {
        const service: MessageService = TestBed.get(MessageService);

        service.add(message);
        service.clear();

        expect(service.messages.length).toEqual(0);
        expect(service.messages).toEqual([]);
    });

});
