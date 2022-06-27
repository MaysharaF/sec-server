import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNameOnFile1656017444440 implements MigrationInterface {
    name = 'AddNameOnFile1656017444440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file" ADD "name" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "name"`);
    }

}
