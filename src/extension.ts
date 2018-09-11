'use strict';

import * as vscode from 'vscode';
import { TaskProvider } from './taskProvider';


export async function activate(context: vscode.ExtensionContext) {
    const taskProvider = new TaskProvider(context);

    vscode.window.registerTreeDataProvider('taskOutline', taskProvider);

    vscode.commands.registerCommand('taskOutline.executeTask', task => {
		console.log(task);	
		vscode.tasks.executeTask(task).then(function (value) {
            console.log(task);
			return value;
		}, function(e) {
			console.error('Error');
		});
	});
}


export function deactivate() {
}