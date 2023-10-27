const payload = (date: string) => ({
	'blocks': [
		{
			'type': 'section',
			'text': {
				'type': 'plain_text',
				'emoji': true,
				'text': `Looks like you have a scheduling conflict with this event: ${date}`
			}
		},
		{
			'type': 'divider'
		},
		{
			'type': 'section',
			'text': {
				'type': 'mrkdwn',
				'text': '*<fakeLink.toUserProfiles.com|Iris / Zelda 1-1>*\nTuesday, January 21 4:00-4:30pm\nBuilding 2 - Havarti Cheese (3)\n2 guests'
			},
			'accessory': {
				'type': 'image',
				'image_url': 'https://api.slack.com/img/blocks/bkb_template_images/notifications.png',
				'alt_text': 'calendar thumbnail'
			}
		},
		{
			'type': 'context',
			'elements': [
				{
					'type': 'image',
					'image_url': 'https://api.slack.com/img/blocks/bkb_template_images/notificationsWarningIcon.png',
					'alt_text': 'notifications warning icon'
				},
				{
					'type': 'mrkdwn',
					'text': '*Conflicts with Team Huddle: 4:15-4:30pm*'
				}
			]
		},
		{
			'type': 'divider'
		},
		{
			'type': 'section',
			'text': {
				'type': 'mrkdwn',
				'text': '*Propose a new time:*'
			}
		},
		{
			'type': 'section',
			'text': {
				'type': 'mrkdwn',
				'text': '*Today - 4:30-5pm*\nEveryone is available: @iris, @zelda'
			},
			'accessory': {
				'type': 'button',
				'text': {
					'type': 'plain_text',
					'emoji': true,
					'text': 'Choose'
				},
				'value': 'click_me_123'
			}
		},
		{
			'type': 'section',
			'text': {
				'type': 'mrkdwn',
				'text': '*Tomorrow - 4-4:30pm*\nEveryone is available: @iris, @zelda'
			},
			'accessory': {
				'type': 'button',
				'text': {
					'type': 'plain_text',
					'emoji': true,
					'text': 'Choose'
				},
				'value': 'click_me_123'
			}
		},
		{
			'type': 'section',
			'text': {
				'type': 'mrkdwn',
				'text': "*Tomorrow - 6-6:30pm*\nSome people aren't available: @iris, ~@zelda~"
			},
			'accessory': {
				'type': 'button',
				'text': {
					'type': 'plain_text',
					'emoji': true,
					'text': 'Choose'
				},
				'value': 'click_me_123'
			}
		},
		{
			'type': 'section',
			'text': {
				'type': 'mrkdwn',
				'text': '*<fakelink.ToMoreTimes.com|Show more times>*'
			}
		},
		{
			'type': 'actions',
			'elements': [
				{
					'type': 'datepicker',
					'initial_date': '1990-04-28',
					'placeholder': {
						'type': 'plain_text',
						'text': 'Select a date',
						'emoji': true
					},
					'action_id': 'actionId-0'
				},
				{
					'type': 'datepicker',
					'initial_date': '1990-04-28',
					'placeholder': {
						'type': 'plain_text',
						'text': 'Select a date',
						'emoji': true
					},
					'action_id': 'actionId-1'
				}
			]
		},
		{
			'type': 'section',
			'text': {
				'type': 'mrkdwn',
				'text': 'Pick a date for the deadline.'
			},
			'accessory': {
				'type': 'datepicker',
				'initial_date': '1990-04-28',
				'placeholder': {
					'type': 'plain_text',
					'text': 'Select a date',
					'emoji': true
				},
				'action_id': 'datepicker-action'
			}
		}
	]
})

export default payload
