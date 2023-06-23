import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../top-page.model';

export class FinfTopPageDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;

}